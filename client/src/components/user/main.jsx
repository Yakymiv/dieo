import React from 'react';
import DieHeader from './../header';
import SubAddOrder from './subAddOrder';
import OrderList from './../global/orderList';
import DieFooter from './../footer';


const MainUser = () => {
    return(
        <React.Fragment>
            <DieHeader />
            <SubAddOrder />
            <OrderList dieCenter={false}/>
            <DieFooter />
        </React.Fragment>
    );
};

export default MainUser;