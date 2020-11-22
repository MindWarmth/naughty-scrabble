import React, { useContext, createContext, useState } from 'react';
import Context from '../context';
import { getRandomName } from './random-name';

export const TYPE = {
  DICTIONARY: 'dictionary',
  WELCOME: 'welcome',
  PLAY: 'play',
  LEAVE: 'leave',
};

const TransportContext = createContext({
  open: () => {},
  sendMessage: () => {},
});
const crossBrowserPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.msRTCPeerConnection;
const crossBrowserSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription || window.msRTCSessionDescription;
const config = { "iceServers": [ { "urls":"stun:stun.l.google.com:19302" } ] };
const connection = {};

const TransportProvider = props => {  
  const { user, setUser, setMessage } = useContext(Context);
  const [ dataChannel, setDataChannel ] = useState();

  const transport = {
    open: (gameID) => open(gameID),
    sendMessage: (message) => sendMessage(message),
  };

  function sendMessage(message) {
    if (dataChannel) {
      dataChannel.send(JSON.stringify(message));
    }
  }

  function open(gameID) {
    return new Promise((resolve, reject) => {
      var ws = null;
      var peerConnection;
      var dataChannel;
      var username;
      
      if (!user) {
        username = getRandomName();
        setUser(username);
      } else {
        username = user;
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
          console.log('%cdataChannel: opened', 'color: green');
          setDataChannel(dataChannel);
          resolve();
        };
        dataChannel.onclose = function(){
          console.log('%cdataChannel: closed', 'color: red');
        };
        dataChannel.onerror = function() {
          console.log('%cdataChannel: error', 'color: red');
        };
  
        peerConnection.ondatachannel = function(ev) {
          ev.channel.onopen = function() {
            // Data channel is open and ready to be used
          };
          ev.channel.onmessage = function(e) {
            setMessage(JSON.parse(e.data));
          };
          ev.channel.onclose = () => {
            console.log('%cpeerConnection channel: closed', 'color: red');
          };
          ev.channel.onerror = (error) => {
            console.log('%cpeerConnection channel: error', 'color: red');
          };
        };
  
        return peerConnection;
      }
  
      function sendNegotiation(type, sdp) {
        var json = { from: username, gameID: gameID, action: type, data: sdp };
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
            sendNegotiation('answer', sdp);
          })
        }, function(err) {
          console.log(err);
        });
      }
  
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
        console.log('%cWebsocket: opened', 'color: gray');
        
        openDataChannel();
  
        var sdpConstraints = { offerToReceiveAudio: true, offerToReceiveVideo: false };
        peerConnection.createOffer(sdpConstraints).then(function(sdp) {
          peerConnection.setLocalDescription(sdp);
          sendNegotiation('offer', sdp);
        }, function(err) {
          console.log(err);
        });
      };
      ws.onclose = function(e) {   
        console.log('%cWebsocket: closed', 'color: gray');
      };
      ws.onerror = function(e) {   
        console.log('%cWebsocket: error', 'color: red');
      };
      ws.onmessage = function(e) {
        var json = JSON.parse(e.data);
        if (json.gameID === gameID && json.from !== username) {
          if (json.action === 'candidate') {
            processIce(json.data);
          } else if (json.action === 'offer') {
            processOffer(json.data);
          } else if (json.action === 'answer') {
            processAnswer(json.data);
          }
        }
      };
    });
  }
  
  return <TransportContext.Provider value={transport} {...props} />;
}

export default TransportProvider;

export const useTransport = () => useContext(TransportContext);
