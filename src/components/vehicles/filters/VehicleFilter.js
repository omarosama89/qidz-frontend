import React from "react";

function VehicleFilter(props) {
  return (
    <>
      <label className="label label-default">by status:</label>

      <select className="form-control" onChange={props.callback}>
        <option></option>
        <option value="connected">Connected</option>
        <option value="disconnected">Disconnected</option>
      </select>
    </>
  );
}

export default VehicleFilter;


