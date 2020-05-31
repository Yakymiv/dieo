import React from 'react';
import { Button } from 'react-bootstrap';
import MainUser from './components/user/main';
import MainDie from './components/die/main';
import CheckPassword from './components/checkPassword';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const OpenDefault = () => {

  return(
     <div className="mb-2">
      <Link to="/dieOrder">
        <Button variant="primary" size="lg">
          Оператор
        </Button>
      </Link>
      <CheckPassword />
    </div>
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
