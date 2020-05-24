import React, { useEffect }  from 'react';
import { Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import addMachinesList from './../../../actions/addMachinesList';

const FirstSelect = ({ choiseForm, dispatch }) => {

    useEffect(() => {
        fetch('http://localhost:5000/die/machines').then(response => response.json())
        .then(data => dispatch(addMachinesList(data))).catch(err => console.error(`Помилка зчитування списку машин із сервера ( ${err.message} ).`));
    });
    
    const handleClick = (e) => {
        const val = (e.target.value);
        choiseForm(val);
    }

    return(
        <React.Fragment>
            <Row className="mb-2 mt-4 justify-content-md-center">
                <h4>Виберіть що вам потрібно</h4>
            </Row>
            <Row className="mb-4 justify-content-md-center">
                <Button value="order" onClick={handleClick} className="mr-3" variant="info" size="lg">
                    Замовити інструмент
                </Button>{' '}
                <Button value="personal" onClick={handleClick} className="ml-3" variant="success" size="lg">
                    Потрібен наладчик
                </Button>
            </Row>
        </React.Fragment>
    );
};

export default connect()(FirstSelect);