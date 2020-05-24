import { ADD_ORDERS_LIST } from './../reduxConstList';

const addOrdersList = ordersList => {
    return {
        type: ADD_ORDERS_LIST,
        ordersList
    };
};

export default addOrdersList;