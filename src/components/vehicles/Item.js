import React from "react";

function Item(props) {

  return (
    <div className="col-md-5 card container row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <img src="vehicle.png" alt="Avatar" style={{ height: '100px' }} />
          </div>
          <div className="col-md-4">
            {props.vehicle.status === 'connected' ? <h3><span className="label label-success">{props.vehicle.status}</span></h3> : <h3><span className="label label-danger">{props.vehicle.status}</span></h3>}
          </div>
        </div>
        <h3><label className="label label-info"><i className="glyphicon glyphicon-user"></i> {props.vehicle.customer_name}</label></h3>
        <h4>Vehicle Id <span className="label label-default">{props.vehicle.vehicle_id}</span></h4>
        <h4>Registration Number <span className="label label-default">{props.vehicle.reg_num}</span></h4>
      </div>
    </div>
  );
}

export default Item;


