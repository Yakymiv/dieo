import React from 'react';
import { Button, Row, Container } from 'react-bootstrap';
import MainUser from './components/user/main';
import MainDie from './components/die/main';
import MainSetting from './components/setting/main'
import CheckPassword from './components/checkPassword';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin-top: 25px;
  button {
    margin: 10px;
  }
`;

const OpenDefault = () => {

  return(
    <ContainerWrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Link to='/dieOrder'>
            <Button variant='primary' size='lg'>
              Оператор
            </Button>
          </Link>
          <CheckPassword textButton='Дай центр' myPassword='1234' myPage='/dieCenter'/>
        </Row>
        <Row className="justify-content-md-center">
          <CheckPassword textButton='Настройки' myPassword='4321' myPage='/dieSetting'/>
        </Row>
      </Container>
      </ContainerWrapper>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={OpenDefault} />
        <Route path='/dieOrder' component={MainUser} />
        <Route path='/dieCenter' component={MainDie} />
        <Route path='/dieSetting' component={MainSetting} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
