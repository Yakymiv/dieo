import React, { useEffect, useState } from 'react';
import { Row, Form, Col, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import addToolList from './../../../actions/addToolList';
import OrderButton from './orderButton';
import useInfoStatusText from './useInfoStatusText';

const OrderForm = ( { dispatch, machines, tools }) => {

    const [selectTool, setSelectTool] = useState(null);
    const [selectMachine, setSelectMachine] = useState(null);
    const [selectDpn, setSelectDpn] = useState(null);
    const [statusText, setStatusText] = useState(false);
    const [open, setOpen] = useState(false);
    const [orderItem, setOrderItem] = useState(false);

    const infoStatusText = useInfoStatusText(statusText, orderItem, 'tool')

    useEffect(() => {
        fetch('http://localhost:5000/die/tools').then(response => response.json()).then(data => {
            dispatch(addToolList(data));
        }).catch(err => console.error(`Помилка зчитування списку доступних інструментів із серверу ( ${err.message} ).`));
    },[dispatch]);

    const handleChange = (e, set) => {
        const value = e.target.value;
        set(value);
        if (e.target.id === 'tool') {
            setSelectDpn('null');
        }
    }

    const handleClick = () => {
        if (selectTool === null || selectMachine === null || selectDpn === null || selectDpn === 'null') {
            setInfoStatus('empty');
            return;
        }
        fetch('http://localhost:5000/die?page=1').then(response => response.json()).then(data => {
            if (data.rows[0] === undefined) {
                data = [{machine: 0, app: 0, material: 0}]
            }
            const dataRow = data.rows[0]
            console.log(dataRow)
            if (dataRow.machine !== selectMachine ? true : dataRow.app !== selectTool ? true : dataRow.material !== selectDpn ? true : false){
                fetch('http://localhost:5000/die', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                        machine: selectMachine,
                        app: selectTool,
                        material: selectDpn,
                        mechanic: null}),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => response.json()).then(data => setInfoStatus(true, data)).catch(err => console.error(`Помилка відправки данних на сервер ( ${err.message} ).`));
        } else setInfoStatus('already');
    }).catch(err => console.error(`Помилка зчитування останнього заказу зі сервера ( ${err.message} ).`));
    }

    const dpnForTool = () => {
        const dpnForm = <Form.Control as="select" multiple disabled></Form.Control>
        if (typeof selectTool === 'string' ? true : typeof selectTool === 'number' ? true : false) {
            const dpnlist = tools.filter(element => element.toolnumber === selectTool);
            const dpnForTool = dpnlist[0].dpn.map(element => <option key={element}>{element}</option>);
            return <Form.Control as="select" multiple onChange={e => handleChange(e, setSelectDpn)}>{dpnForTool}</Form.Control>;
        } else {
            return dpnForm;
        }
    }

    const setInfoStatus = (status, data) => {
        setStatusText(status);
        if (data) setOrderItem(data[0]);
        setOpen(true)
    }

    return(
        <React.Fragment>
            <Row className="mb-2 mt-2 justify-content-md-center">
                <h4>Заказ інструменту</h4>
            </Row>
            <Form>
                <Row className="mb-2 justify-content-md-center">
                    <Col sm={2}>
                        <Form.Group controlId="machine">
                            <Form.Label>Машина</Form.Label>
                            <Form.Control as="select" onChange={e => handleChange(e, setSelectMachine)} multiple>
                                {machines.map(element => <option key={element.id}>{element.machine}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={5}>
                        <Form.Group controlId="tool">
                            <Form.Label>Апплікатор</Form.Label>
                            <Form.Control as="select" onChange={e => handleChange(e, setSelectTool)} multiple>
                                {tools.map(element => <option key={element.id}>{element.toolnumber}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={5}>
                        <Form.Group controlId="material">
                            <Form.Label>Матеріал</Form.Label>
                            {dpnForTool()}
                        </Form.Group>
                    </Col>
                </Row>
                <OrderButton myClick={handleClick}/>
                <Row className="mb-2">
                    <Col>
                        <Collapse in={open}>
                            {infoStatusText}
                        </Collapse>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        tools: state.toolList,
        machines: state.machinesList
    }
}

export default connect(mapStateToProps)(OrderForm);