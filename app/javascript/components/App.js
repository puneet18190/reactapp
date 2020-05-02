import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropsRoute from './PropsRoute';
import UsersIndex from './UsersIndex';
import UserShow from './UserShow';
import UserForm from './UserForm';

const App = () => (
  <div>
    <Switch>
      <PropsRoute path="/users/new" component={UserForm} />
      <PropsRoute path="/users/:id/edit" component={UserForm} />
      <PropsRoute path="/users/:id" component={UserShow} />
      <PropsRoute path="/users" component={UsersIndex} name='Users CRUD App' />
    </Switch>
  </div>
);

export default App;
