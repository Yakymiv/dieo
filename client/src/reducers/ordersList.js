import { ADD_ORDERS_LIST } from './../reduxConstList';

const defaultOrdersList = [];

const ordersList = (state = defaultOrdersList, action) => {
    switch(action.type) {
        case ADD_ORDERS_LIST:
            return action.ordersList;
        default:
            return state;
    }
}

export default ordersList;