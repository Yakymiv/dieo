import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import addOrderList from './../../actions/addOrderList';
import Paginat from './paginat'
import TdList, { Th } from './ThTdList';


const OrderList = ({ ordersList, dispatch, dieCenter }) => {

    const [selectPage, setSelectPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [reloadStatus, setReloadStatus] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/die?page=${selectPage}`).then(response => response.json()).then(data => {
            dispatch(addOrderList(data.rows));
            setLastPage(data.maxPage);
        })
    }, [dispatch, selectPage]);

    useEffect(() => {
        
        if (selectPage === 1 && reloadStatus === false) {
            const myInt = setInterval(() => {
                fetch('http://localhost:5000/die?page=1').then(response => response.json()).then(data => dispatch(addOrderList(data.rows)));
            }, 3000);
            setReloadStatus(myInt);
        }if (selectPage !== 1 && reloadStatus !== false) {
            clearInterval(reloadStatus);
            setReloadStatus(false);
        }

        return () => {
            if (reloadStatus) {
                clearInterval(reloadStatus)
            }
        }
    }, [selectPage, reloadStatus, dispatch]);

    return(
        <React.Fragment>
            <section>
                <Table responsive size="sm">
                    <thead>
                        <tr>
                        <Th>Машина</Th>
                        <Th>Апплікатор</Th>
                        <Th>Матеріал</Th>
                        <Th>Механік</Th>
                        <Th>Час заказу</Th>
                        <Th>Статус</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {(ordersList.length !== 0) && ordersList.map(element => <TdList key={element.id} selectPage={selectPage} dieCenter={dieCenter}>{element}</TdList>)}
                    </tbody>
                </Table>
            </section>
            <Paginat changePage={setSelectPage} currentNumber={selectPage} lastPage={lastPage}/>
        </React.Fragment>
    );
};

const mapStateToProps = store => {
    return {
        ordersList: store.ordersList
    }
}

export default connect(mapStateToProps)(OrderList);