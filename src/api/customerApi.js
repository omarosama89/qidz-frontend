import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'

const URL = config.default['CUSTOMERS_HOST'];
const CustomerBaseUrl = URL + "/server/customers";



export function getCustomers() {
  return fetch(CustomerBaseUrl)
    .then(handleResponse)
    .catch(handleError);
}

