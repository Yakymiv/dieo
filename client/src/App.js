import React from 'react';
import { Button } from 'react-bootstrap';
import MainUser from './components/user/main';
import MainDie from './components/die/main';
import CheckPassword from './components/checkPassword';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleDiv = styled.div`
    display: flex;
    Justify-content: center;
    padding: 30px 0px;
    a {
        margin: 0px 10px;
        button {
            width: 200px;
        }
    }
`;

const OpenDefault = () => {

  return(
     <StyleDiv>
      <Link to="/dieOrder">
        <Button variant="primary" size="lg">
          Оператор
        </Button>
      </Link>
      <CheckPassword />
    </StyleDiv>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={OpenDefault} />
        <Route path='/dieOrder' component={MainUser} />
        <Route path='/dieCenter' component={MainDie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
