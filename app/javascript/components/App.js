import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropsRoute from './PropsRoute';
import UsersIndex from './UsersIndex';
import UserShow from './UserShow';
import UserNew from './UserNew';

const App = () => (
  <div>
    <Switch>
      <PropsRoute path="/users/new" component={UserNew} />
      <PropsRoute path="/users/:id" component={UserShow} />
      <PropsRoute path="/users" component={UsersIndex} name='puneet' />
    </Switch>
  </div>
);

export default App;
