import React from 'react';
import DieHeader from './../header';
import DieFooter from '../footer';
import OrderList from './../global/orderList';

const MainDie = () => {
    return(
        <React.Fragment>
            <DieHeader />
            <OrderList dieCenter={true}/>
            <DieFooter />
        </React.Fragment>
    );
}

export default MainDie;