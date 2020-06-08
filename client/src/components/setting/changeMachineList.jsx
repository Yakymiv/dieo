import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ChangeMachineList = () => {
    return(
    <Form.Group controlId="changeMachineList">
        <h4>Заміни в списку машин</h4>
        <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Form.Control>
        <Button variant="danger" block>Удалити</Button>
        <hr />
        <Form.Control type="text" placeholder="Номер машини" />
        <Button variant="success" block>Добавити</Button>
    </Form.Group>
    );
}

export default ChangeMachineList;