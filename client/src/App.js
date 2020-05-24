import React from 'react';
import { Button } from 'react-bootstrap';
import MainUser from './components/user/main';
import MainDie from './components/die/main';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const OpenDefault = () => {
  return(
     <div className="mb-2">
      <Link to="/dieOrder">
        <Button variant="primary" size="lg">
          Оператор
        </Button>
      </Link>
      <Link to="/dieCenter">
      <Button variant="info" size="lg">
        Дай центр
      </Button>
      </Link>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={OpenDefault} />
        <Route path='/dieCenter' component={MainDie} />
        <Route path='/dieOrder' component={MainUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
