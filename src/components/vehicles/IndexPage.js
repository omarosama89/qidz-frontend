import React, { useState, useEffect } from "react";
// import { getVehicles } from "../../api/vehicleApi";
import { getVehicles } from "../../actions/vehicleActions";
import VehicleStore from '../../stores/VehicleStore';
import Item from './Item';
import VehicleFilter from './filters/VehicleFilter';
import CustomerFilter from './filters/CustomerFilter';
import Realtime from '../Realtime';

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

  function onChange() {
    setVehicles([]);
    setVehicles(VehicleStore.getVehicles())
  }

  useEffect(() => {
    VehicleStore.addChangeListener(onChange);
    // let search = window.location.search;
    // let params = new URLSearchParams(search);
    // let id = params.get('customer_id');
    // setCustomerId(id)
    getVehicles(status, customerId);
    return () => VehicleStore.removeChangeListener(onChange);
  }, [status, customerId]);


  return (
    <>
      <div className="row">
        <div className="col-md-3" key='v'>
          <VehicleFilter callback={vehicleFilterCallback} />
        </div>
        <div className="col-md-3" key="c">
          <CustomerFilter callback={customerFilterCallback} />
        </div>
      </div>
      <div className="jumbotron">
        {vehicles.map(vehicle => {
          return (
            <>
              <Item key={vehicle.id} vehicle={vehicle} />
            </>
          )
        })}
      </div>
      <Realtime />
    </>
  );
}

export default IndexPage;
