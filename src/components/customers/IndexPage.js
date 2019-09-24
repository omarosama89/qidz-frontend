import React, { useState, useEffect } from "react";
import { getCustomers } from "../../api/customerApi";

function IndexPage() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getCustomers().then(_cutomers => { setCustomers(_cutomers) })
  }, []);
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr key='0'>
            <th key='id'>#</th>
            <th key='fn'>Firstname</th>
            <th key='ln'>Lastname</th>
            <th key='addr'>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(_customer => {
            return (
              <>
                <tr key={_customer.id}>
                  <td>{_customer.id}</td>
                  <td>{_customer.first_name}</td>
                  <td>{_customer.last_name}</td>
                  <td>{_customer.address}}</td>
                </tr>
              </>
            )
          })}

        </tbody>
      </table>
    </div>
  );
}

export default IndexPage;
