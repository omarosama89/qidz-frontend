import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'

const URL = config.default['HOST']
const baseUrl = URL + "/reviews";

export function getReviews(status, customerId) {
  return fetch(injectParamsInUrl(baseUrl, { status: status, customer_id: customerId }))
    .then(handleResponse)
    .catch(handleError);
}

export function getCustomers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

function injectParamsInUrl(url, hash) {
  let params = '';
  Object.keys(hash).forEach(function (key) { params += `${key}=${hash[key]}&` })
  return `${url}?${params}`
}