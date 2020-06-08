import React from 'react';
import { Form, Col } from 'react-bootstrap';
import ChangeMachineList from './changeMachineList';

const SettingForm = () => {
    return(
        <Form>
            <Form.Row>
                <Col sm={2}>
                    <ChangeMachineList />
                </Col>
            </Form.Row>
        </Form>
    );
}

export default SettingForm;