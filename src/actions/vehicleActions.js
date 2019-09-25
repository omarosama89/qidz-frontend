import dispatcher from '../appDispatcher';
import * as vehicleApi from '../api/vehicleApi';
import actionTypes from './actionTypes';

export function getVehicles(status = '', customerId = '') {
    vehicleApi.getVehicles(status, customerId).then(_vehicles => {
        dispatcher.dispatch({
            actionType: actionTypes.VEHICLES_UPDATED,
            vehicles: _vehicles
        });
    });

}
