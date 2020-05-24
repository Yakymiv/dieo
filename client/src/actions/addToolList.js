import { ADD_TOOL_LIST } from './../reduxConstList';

const addToolList = toolList => {
    return {
        type: ADD_TOOL_LIST,
        toolList
    }
}

export default addToolList;