import React from 'react';
import DieHeader from './../header';
import DieFooter from './../footer';
import SettingForm from './settingForm';


const MainSetting = () => {
    return(
        <React.Fragment>
            <DieHeader />
            <SettingForm />
            <DieFooter />
        </React.Fragment>
    );
}

export default MainSetting;