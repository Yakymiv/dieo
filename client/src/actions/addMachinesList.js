import { ADD_MACHINES_LIST } from './../reduxConstList';

const addMachinesList = machinesList => {
    return {
        type: ADD_MACHINES_LIST,
        machinesList
    }
}

export default addMachinesList;