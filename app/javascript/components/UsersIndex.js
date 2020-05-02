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

    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/users.json')
      .then(response => this.setState({ users: response.data }))
      .catch(handleAjaxError);
  }

  deleteUser(userId){
    const sure = window.confirm('Are you sure?');
    if (sure) {
      axios
        .delete(`/api/users/${userId}.json`)
        .then((response) => {
          if (response.status === 200) {
            console.log('User deleted successfully');
            const { users } = this.state;
            this.setState({ users: users.filter(user => user.id !== userId) });
          }
        })
        .catch(handleAjaxError);
    }
    
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
        {' '}
        <Link to={`/users/${user.id}/edit`}>Edit</Link>
        <button className="delete" type="button" onClick={() => this.deleteUser(user.id)}>
          Delete
        </button>
      </li>
    ));
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        {name}
        <h1>All Users</h1>
        <Link to='/users/new'>
          Add User
        </Link>
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
