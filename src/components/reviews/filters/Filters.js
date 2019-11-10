import React from "react";
import VehicleFilter from './VehicleFilter';
import CustomerFilter from './CustomerFilter';

import { directive } from "@babel/types";

function Filters(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <VehicleFilter />
      </div>
      <div className="col-md-3">
        <CustomerFilter />
      </div>
    </div>
  );
}

export default Filters;


