import { handleResponse, handleError } from "./apiUtils";
import * as config from '../config'

const URL = config.default['HOST'];
const baseUrl = URL + "/movies";



export function getMovies(actor) {
  return fetch(baseUrl + `?actor=${actor == undefined ? '' : actor}`)
    .then(handleResponse)
    .catch(handleError);
}

export function getActors(){
  return fetch(baseUrl + '/actors')
      .then(handleResponse)
      .catch(handleError);
}