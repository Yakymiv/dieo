import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CheckPassword = () => {
    const password = 'Rr412762';
    const [show, setShow] = useState(false);
    const [inputData, setInputData] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setInputData(e.target.value);
    }

    const handleCheck = () => {
        const value = String(inputData);
        if (value === password) {
            window.location.assign('/dieCenter');
        } else {
            setInputData('');
           handleClose();
        }
    }

    return(
        <React.Fragment>
        <Button variant="primary" size="lg" onClick={handleShow}>
          Дай центр
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Перевірка пароля</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Введіть в полі пароль доступу</Form.Label>
                <Form.Control type="password" placeholder="Пароль" value={inputData} onChange={handleChange}/>
                <Form.Text className="text-muted">
                    Щоб перейти дальше вам потрібно вказати вірний пароль.
                </Form.Text>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCheck}>
                    Получити доступ
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    );
}

export default CheckPassword;