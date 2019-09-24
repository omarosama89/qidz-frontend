import React from "react";

function Item(props) {

  return (
    <>
      <div className="card container row">
        <div className="col-md-4">
          <img src="vehicle.png" alt="Avatar" />
        </div>
        <div className="col-md-6">
          <h3><label className="label label-info"><i className="glyphicon glyphicon-user"></i> {props.vehicle.customer_name}</label></h3>
          <h4>Vehicle Id <span className="label label-default">{props.vehicle.vehicle_id}</span></h4>
          <h4>Registration Number <span className="label label-default">{props.vehicle.reg_num}</span></h4>
          <br />
          {props.vehicle.status === 'connected' ? <h4><span className="label label-success">{props.vehicle.status}</span></h4> : <h4><span className="label label-danger">{props.vehicle.status}</span></h4>}

        </div>
      </div>
      <br />
    </>
  );
}

export default Item;


