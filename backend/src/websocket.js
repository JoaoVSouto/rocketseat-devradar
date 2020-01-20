import socketio from 'socket.io';

import parseStringAsArray from './utils/parseStringAsArray';
import calculateDistance from './utils/calculateDistance';

let io;
const connections = [];

export const setUpWebSocket = server => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: +latitude,
        longitude: +longitude,
      },
      techs: parseStringAsArray(techs || ''),
    });
  });
};

export const findConnections = (coordinates, techs) =>
  connections.filter(
    connection =>
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
  );

export const sendMessage = (to, message, data) =>
  to.forEach(connection => io.to(connection.id).emit(message, data));
