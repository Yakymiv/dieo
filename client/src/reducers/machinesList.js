import { ADD_MACHINES_LIST } from './../reduxConstList';

const machinesListDefault = [];

const machinesList = (state = machinesListDefault, action) => {
    switch(action.type) {
        case ADD_MACHINES_LIST:
            return action.machinesList;
        default:
            return state;
    }
}

export default machinesList;