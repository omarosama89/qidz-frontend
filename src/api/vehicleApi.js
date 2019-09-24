import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/server/courses";
const URL = "http://localhost:8000";
const vehicleBaseUrl = URL + "/server/vehicles";
const CustomerBaseUrl = URL + "/server/customers";

export function getVehicles(status, customerId) {
  return fetch(injectParamsInUrl(vehicleBaseUrl, { status: status, customer_id: customerId }))
    .then(handleResponse)
    .catch(handleError);
}

export function getCustomers() {
  return fetch(CustomerBaseUrl)
    .then(handleResponse)
    .catch(handleError);
}

function injectParamsInUrl(url, hash) {
  let params = '';
  Object.keys(hash).forEach(function (key) { params += `${key}=${hash[key]}&` })
  return `${url}?${params}`
}