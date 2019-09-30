import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import * as config from '../config';
var socket;

class Realtime extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: config.default['REALTIME_HOST']
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
