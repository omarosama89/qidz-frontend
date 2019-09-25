import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
var socket;

class Realtime extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3001/'
    };
    socket = socketIOClient(this.state.endpoint);
  }
  componentDidMount() {
    function realtimeCallback(data) {
      dispatcher.dispatch({
        actionType: actionTypes.VEHICLE_UPDATED,
        vehicle: data
      });
    }

    socket.on('event', realtimeCallback);
  }
  componentWillUnmount() {
    socket.off('event');
  }

  render() {
    return (
      <></>
    )
  }

}

export default Realtime;
