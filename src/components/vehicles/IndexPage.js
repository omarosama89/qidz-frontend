import React, { useState, useEffect } from "react";
import { getVehicles } from "../../api/vehicleApi";
import Item from './Item';
import VehicleFilter from './filters/VehicleFilter';
import CustomerFilter from './filters/CustomerFilter';

function IndexPage(props) {

  const [vehicles, setVehicles] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [status, setStatus] = useState('');




  function vehicleFilterCallback(event) {
    setStatus(event.target.value);
  }

  function customerFilterCallback(event) {
    setCustomerId(event.target.value);
  }

  useEffect(() => {
    // let search = window.location.search;
    // let params = new URLSearchParams(search);
    // let id = params.get('customer_id');
    // setCustomerId(id)
    getVehicles(status, customerId).then(_vehicles => { console.log(_vehicles); setVehicles(_vehicles) });
  }, [status, customerId]);

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <VehicleFilter callback={vehicleFilterCallback} />
        </div>
        <div className="col-md-3">
          <CustomerFilter callback={customerFilterCallback} />
        </div>
      </div>
      <div className="jumbotron">
        {vehicles.map(vehicle => {
          return (
            <Item key={vehicle.id} vehicle={vehicle} />
          )
        })}
      </div>
    </>
  );
}

export default IndexPage;
