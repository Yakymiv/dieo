import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ModalForm from './modalForms/modalForm';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin: 15px 30px;
    width: 40%;
`;

const SubAddOrder = () => {

    const [modalShow, setModalShow] = useState(false);

    const setButton = modalShow ? (
            <ButtonWrapper><Button variant="outline-info" size="lg" block onClick={() => setModalShow(true)} active>
                Зробити замовлення
            </Button></ButtonWrapper>
         ) : (
            <ButtonWrapper><Button variant="outline-info" size="lg" block onClick={() => setModalShow(true)}>
                Зробити замовлення
            </Button></ButtonWrapper>
        )

    return(
        <section>
            {setButton}
            <ModalOrderTools show={modalShow} onHide={() => setModalShow(false)} />
        </section>

    );
};

const ModalOrderTools = (props) => {
    return(
        <Modal {...props} size="lg" arial-labeledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Форма заказу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default SubAddOrder;