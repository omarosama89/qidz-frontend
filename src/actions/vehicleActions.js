import dispatcher from '../appDispatcher';
import * as reviewsApi from '../api/reviewsApi';
import actionTypes from './actionTypes';

export function getVehicles(status = '', customerId = '') {
    reviewsApi.getVehicles(status, customerId).then(_vehicles => {
        dispatcher.dispatch({
            actionType: actionTypes.VEHICLES_UPDATED,
            vehicles: _vehicles
        });
    });

}
