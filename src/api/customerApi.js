import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/server/vehicles";
const URL = "http://localhost:8001";
const CustomerBaseUrl = URL + "/server/customers";

export function getCustomers() {
  return fetch(CustomerBaseUrl)
    .then(handleResponse)
    .catch(handleError);
}

