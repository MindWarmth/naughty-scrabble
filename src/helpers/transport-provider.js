import React, { useContext, createContext, useEffect, useState } from 'react';
import Context from '../context';

export const TYPE = {
  DICTIONARY: 'dictionary',
  MESSAGE: 'message',
  PLAY: 'play'
};

const TransportContext = createContext({
  open: () => {},
  onMessage: () => {},
  sendMessage: () => {},
});
const crossBrowserPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.msRTCPeerConnection;
const crossBrowserSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription || window.msRTCSessionDescription;
const config = { "iceServers": [ { "urls":"stun:stun.l.google.com:19302" } ] };
const connection = {};
const DEFAULT_NAME = 'Alice';

const TransportProvider = props => {  
  const {
    setUser
  } = useContext(Context);
  const [ dataChannel, setDataChannel ] = useState();
  const [ messageHandlers, setMessageHandlers ] = useState([]);
  const [ message, setMessage ] = useState();

  useEffect(() => {
    if (message) {
      messageHandlers.forEach((fn) => {
        if (fn) {
          fn(message);
        }
      });
      setMessage(null);
    }
  }, [ message ]);

  const transport = {
    open: (gameID) => open(gameID),
    onMessage: (fn) => onMessage(fn),
    sendMessage: (message) => sendMessage(message),
  };

  function onMessage(fn) {
    console.log('messageHandlers', messageHandlers);
    setMessageHandlers(prevMessageHandlers => [...prevMessageHandlers, fn]);
  }

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
      var user = `${DEFAULT_NAME}_${Math.floor(Math.random() * 10000)}`;
  
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
          setUser(user);
          setDataChannel(dataChannel);
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
            setMessage(JSON.parse(e.data));
          };
        };
  
        return peerConnection;
      }
  
      function sendNegotiation(type, sdp) {
        var json = { from: user, gameID: gameID, action: type, data: sdp };
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
        console.log('%cWebsocket opened', 'color: gray');
        
        openDataChannel();
  
        var sdpConstraints = { offerToReceiveAudio: true, offerToReceiveVideo: false };
        peerConnection.createOffer(sdpConstraints).then(function(sdp) {
          peerConnection.setLocalDescription(sdp);
          sendNegotiation("offer", sdp);
        }, function(err) {
          console.log(err);
        });
      };
      ws.onclose = function(e) {   
        console.log('%cWebsocket closed', 'color: gray');
      };
      ws.onerror = function(e) {   
        console.log('%cWebsocket error', 'color: red');
      };
      ws.onmessage = function(e) {
        var json = JSON.parse(e.data);
        if (json.gameID === gameID && json.from !== user) {
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