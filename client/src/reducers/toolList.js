import { ADD_TOOL_LIST } from './../reduxConstList';

const defaultToolList = [];

const toolList = (state = defaultToolList, action) => {
    switch(action.type){
        case ADD_TOOL_LIST:
            return action.toolList;
        default:
            return state;
    }
}

export default toolList;