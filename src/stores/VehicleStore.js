import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';
const CHANGE_EVENT = "change";
let _vehicles = [];
class VehicleStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getVehicles() {
        return _vehicles;
    }
    getVehicleById(id) {
        return _vehicles.find(vehicle => vehicle.id === id)
    }
}
const store = new VehicleStore();

function updateVehicleById(vehicle) {
    for (let i in _vehicles) {
        if (_vehicles[i].id == vehicle.id) {
            _vehicles[i] = vehicle;
            break;
        }
    }
}

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.VEHICLES_UPDATED:
            _vehicles = action.vehicles;
            store.emitChange();
            break;
        case actionTypes.VEHICLE_UPDATED:
            updateVehicleById(action.vehicle);
            toast.success(`vehicle #${action.vehicle.vehicle_id} has been updated`)
            store.emitChange();
            break;
        default:
        //
    }
})

export default store;