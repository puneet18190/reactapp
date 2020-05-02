import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropsRoute from './PropsRoute';
import UsersIndex from './UsersIndex';
import UsersShow from './UsersShow';

const App = () => (
  <div>
    <h1>test</h1>
    <Switch>
      <PropsRoute path="/users/:id" component={UsersShow} />
      <PropsRoute path="/users" component={UsersIndex} name='puneet' />
    </Switch>
  </div>
);

export default App;
