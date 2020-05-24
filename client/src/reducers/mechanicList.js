import { ADD_MECHANIC_LIST } from './../reduxConstList';

const mechanicListDefault = [];

const mechanicList = (state = mechanicListDefault, action) => {
    switch(action.type){
        case ADD_MECHANIC_LIST:
            return action.mechanicList;
        default:
            return state;
    }
}

export default mechanicList;