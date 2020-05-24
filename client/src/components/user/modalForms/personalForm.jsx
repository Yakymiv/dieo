import React, { useEffect, useState } from 'react';
import { Row, Form, Col, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import addMechanicList from './../../../actions/addMechanicList';
import OrderButton from './orderButton';
import useInfoStatusText from './useInfoStatusText';

const PersonalForm = ({ dispatch, mechanic, machines }) => {

    const [selectMachine, setSelectMachine] = useState(null);
    const [selectPers, setSelectPers] = useState("DIE");
    const [open, setOpen] = useState(false);
    const [statusText, setStatusText] = useState(false);
    const [orderItem, setOrderItem] = useState(false);

    const infoStatusText = useInfoStatusText(statusText, orderItem, 'pers')

    useEffect(() => {
        fetch('http://localhost:5000/die/mechanic').then(response => response.json()).then(data => {
            dispatch(addMechanicList(data));
        }).catch(err => console.error(`Помилка зчитування доступних механіків із серверу ( ${err.message} ).`));
    }, [dispatch])

    const handleChange = (e, set) => {
        const value = e.target.value;
        set(value);
    }

    const handleClick = () => {
        if (selectMachine === null || selectPers === null) {
            setInfoStatus('empty')
            return;
        }
        fetch('http://localhost:5000/die?page=1').then(response => response.json()).then(data => {
            if (data.rows[0] === undefined) {
                data = [{machine: 0, mechanic: 0}]
            }
            const dataRow = data.rows[0];
            if (dataRow.machine !== selectMachine || dataRow.mechanic !== selectPers) {
                fetch('http://localhost:5000/die', {
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({
                        machine: selectMachine,
                        app: null,
                        material: null,
                        mechanic: selectPers
                    })
                }).then(response => response.json()).then(data => setInfoStatus(true, data)).catch(err => console.error(`Помилка відправки данних на сервер ( ${err.message} ).`));
            } else setInfoStatus('already')
        }).catch(err => console.error(`Помилка зчитування останнього заказу із сервера ( ${err.message} ).`));
    }

    const setInfoStatus = (status, data) => {
        setStatusText(status);
        if (data) setOrderItem(data[0]);
        setOpen(true)
    }

    return(
        <React.Fragment>
            <Row className="mb-2 mt-2 justify-content-md-center">
                <h4>Виклик наладчика</h4>
            </Row>
            <Form>
                <Row className="mb-4 justify-content-md-center" >
                    <Col sm={2}>
                        <Form.Group controlId="machine">
                            <Form.Label>Машина</Form.Label>
                            <Form.Control as="select" multiple onChange={e => handleChange(e, setSelectMachine)}>
                                {machines.map(element => <option key={element.id}>{element.machine}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="tool">
                            <Form.Label>Хто потрібен</Form.Label>
                            <Form.Control as="select" onChange={e => handleChange(e, setSelectPers)}>
                                {mechanic.map(element => <option key={element.id} value={element.mechanic}>{element.mechanic === 'DIE' ? 'Die-центру' :
                                    element.mechanic === 'Mechan' ? 'До машини/верстата' : false}</option>)}
                            </Form.Control>
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
    );
};

const mapStateToProps = state => {
    return {
        mechanic: state.mechanicList,
        machines: state.machinesList
    }
}

export default connect(mapStateToProps)(PersonalForm);