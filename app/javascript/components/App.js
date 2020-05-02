import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersIndex from './UsersIndex';
import PropsRoute from './PropsRoute';

const App = () => (
  <div>
    <h1>test</h1>
    <Switch>
      <PropsRoute path="/users" component={UsersIndex} name='puneet' />
    </Switch>
  </div>
);

export default App;
