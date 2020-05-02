/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleAjaxError } from '../helpers/helpers';
import axios from 'axios';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/users.json')
      .then(response => this.setState({ users: response.data }))
      .catch(handleAjaxError);
  }

  renderUsers() {
    const { users } = this.state;

    return users.map(user => (
      <li key={user.id}>
        <Link to={`/users/${user.id}`}>
          {user.name}
          {' - '}
          {user.age}
          {' - '}
          {user.address}
        </Link>
      </li>
    ));
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>All Users</h1>
        {name}
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

UsersIndex.propTypes = {
  name: PropTypes.string,
};

UsersIndex.defaultProps = {
  name: 'test',
};

export default UsersIndex;
