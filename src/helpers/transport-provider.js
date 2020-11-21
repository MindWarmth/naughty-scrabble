import React, { useContext, createContext } from 'react';

const TransportContext = createContext({ open: () => {}, join: () => {} });
const crossBrowserPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.msRTCPeerConnection;
const crossBrowserSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription || window.msRTCSessionDescription;
const config = { "iceServers": [{ "urls":"stun:stun.l.google.com:19302" }] };
const connection = {};
const DEFAULT_NAME = 'Alice';

const TransportProvider = props => {  
  const transport = {
    // TODO rework, these methods should be different
    open: (gameID) => openConnection(gameID),
    join: (gameID) => openConnection(gameID),
  };

  function openConnection(gameID) {
    return new Promise((resolve, reject) => {
      var ws = null;
      var peerConnection;
      var dataChannel;
      var user = '';
      var user2 = '';

      // TODO rework with gameID
  
      var searchParams = new URLSearchParams(window.location.search);
      var name = searchParams.get('name');
      var to = searchParams.get('to');
  
      user = name || `${DEFAULT_NAME}_${Math.floor(Math.random() * 10000)}`;
      if (to) {
        user2 = to;
      }
  
      function openDataChannel() {
        peerConnection = new crossBrowserPeerConnection(config, connection);
        peerConnection.onicecandidate = function(e) {
          if (!peerConnection || !e || !e.candidate) return;
          var candidate = e.candidate;
          sendNegotiation('candidate', candidate);
        }
  
        dataChannel = peerConnection.createDataChannel('datachannel', { reliable: false });
  
        dataChannel.onopen = function() {
          console.log('%cDATACHANNEL OPENED', 'color: green');
          // TODO for demo purpose
          dataChannel.send(`Hellow from ${user}!`);
          resolve();
        };
        dataChannel.onclose = function(){
          console.log('%cDATACHANNEL CLOSED', 'color: red');
        };
        dataChannel.onerror = function() {
          console.log('%cDATACHANNEL ERROR', 'color: red');
        };
  
        peerConnection.ondatachannel = function(ev) {
          ev.channel.onopen = function() {
            // Data channel is open and ready to be used
          };
          ev.channel.onmessage = function(e) {
            // TODO for demo purpose
            console.log(`%cMessage from ${user2}:\n${e.data}`, 'font-weight: bold');
          };
        };
  
        return peerConnection;
      }
  
      function sendNegotiation(type, sdp) {
        var json = { from: user, to: user2, action: type, data: sdp };
        ws.send(JSON.stringify(json));
      }
  
      function processOffer(offer) {
        var peerConnection = openDataChannel();
        peerConnection.setRemoteDescription(new crossBrowserSessionDescription(offer)).catch(e => {
          console.log(e);
        });
  
        var sdpConstraints = { 'mandatory': { 'OfferToReceiveAudio': false, 'OfferToReceiveVideo': false } };
  
        peerConnection.createAnswer(sdpConstraints).then(function(sdp) {
          return peerConnection.setLocalDescription(sdp).then(function() {            
            sendNegotiation("answer", sdp);
          })
        }, function(err) {
          console.log(err);
        });
      };
  
      function processAnswer(answer) {
        peerConnection.setRemoteDescription(new crossBrowserSessionDescription(answer));
      }
  
      function processIce(iceCandidate) {
        peerConnection.addIceCandidate(new RTCIceCandidate(iceCandidate)).catch(e => {
          debugger
          console.log(e);
        })
      }
  
      ws = new WebSocket(props.url);
      ws.onopen = function(e) {    
        console.log('%cWebsocket opened', 'color: gray');
        if (to) {
          openDataChannel();
  
          var sdpConstraints = { offerToReceiveAudio: true,  offerToReceiveVideo: false };
          peerConnection.createOffer(sdpConstraints).then(function(sdp) {
              peerConnection.setLocalDescription(sdp);
              sendNegotiation("offer", sdp);
          }, function(err) {
              console.log(err);
          });
        }
      }
      ws.onclose = function(e) {   
        console.log('%cWebsocket closed', 'color: gray');
      }
      ws.onerror = function(e) {   
        console.log('%cWebsocket error', 'color: red');
      }
      ws.onmessage = function(e) { 
        var json = JSON.parse(e.data);
        if (json.action === "candidate") {
          if (json.to === user) {
            processIce(json.data);
          }
        } else if (json.action === "offer") {
          if (json.to === user) {
            user2 = json.from;
            processOffer(json.data);
          }
        } else if (json.action === "answer") {
          if (json.to === user) {
            processAnswer(json.data);
          }
        } 
      }
    });
  }
  
  return <TransportContext.Provider value={transport} {...props} />;
}

export default TransportProvider;

export const useTransport = () => useContext(TransportContext);
