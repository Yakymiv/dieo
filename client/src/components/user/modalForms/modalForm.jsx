import React, { useState }  from 'react';
import FirstSelect from './firstSelect';
import OrderForm from './orderForm';
import PersonalForm from './personalForm';

const ModalForm = () => {
    const [idForm, setIdForm] = useState('first');
    const myChoise = () => {
        if (idForm === 'first') {
            return <FirstSelect  choiseForm={setIdForm}/>
        } else if (idForm === 'order') {
            return <OrderForm />
        } else if (idForm === 'personal') {
            return <PersonalForm />
        } else {
            return <FirstSelect  choiseForm={setIdForm}/>
        }
    }

    return(
        <React.Fragment>
            {myChoise()}
        </React.Fragment>
    );
};

export default ModalForm;