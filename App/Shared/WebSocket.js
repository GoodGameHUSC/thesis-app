import io from 'socket.io-client';
import Config from '../Config';

const socket = io(Config.WEBSOCKET_URL, {
  transports: ['websocket'],
  jsonp: false
});

export const startSocketIO = () => {
  socket.connect();
  socket.on('connect', () => {
    console.log("Connected to server")
    socket.on('disconnect', () => {
      console.log('Connection to server lost.');
    });
  })
}

export default socket;
