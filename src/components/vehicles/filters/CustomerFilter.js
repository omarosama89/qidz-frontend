import React, { useState, useEffect } from "react";
import { getCustomers } from "../../../api/vehicleApi";

function CustomerFilter(props) {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getCustomers().then(_customers => { setCustomers(_customers) })
  }, [])

  return (
    <>
      <label className="label label-default">by Customer:</label>

      <select className="form-control" onChange={props.callback}>
        <option key='0'></option>
        {customers.map(_customer => {
          return (
            <option key={_customer.id} value={_customer.id}>{_customer.first_name} {_customer.last_name}</option>
          )
        })}
      </select>
    </>
  );
}

export default CustomerFilter;


