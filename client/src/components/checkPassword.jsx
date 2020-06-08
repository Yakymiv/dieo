import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckPassword = ({textButton, myPassword, myPage}) => {
    const password = String(myPassword);
    const [show, setShow] = useState(false);
    const [inputData, setInputData] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setInputData(e.target.value);
    }

    const myButton = () => {
        const value = String(inputData);
        if (value === password) {
            return(
                <Link to={myPage}>
                    <Button variant="primary">
                        Получити доступ
                    </Button>
                </Link>
            );
        } else {
            return(
                <Button variant="primary" onClick={() => {
                    setInputData('');
                    handleClose();
                }}>
                    Получити доступ
                </Button>
            )
        }
    }

    return(
        <React.Fragment>
        <Button variant="primary" size="lg" onClick={handleShow}>
          {textButton}
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
                {myButton()}
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    );
}

export default CheckPassword;