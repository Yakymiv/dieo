import { ADD_MECHANIC_LIST } from './../reduxConstList';

const addMechanicList = mechanicList => {
    return {
        type: ADD_MECHANIC_LIST,
        mechanicList
    }
}

export default addMechanicList;