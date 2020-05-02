/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleAjaxError } from '../helpers/helpers';
import axios from 'axios';
import UserNotFound from './UserNotFound';

class UsersShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.id;

    axios
      .get(`/api/users/${userId}.json`)
      .then(response => this.setState({ user: response.data }))
      .catch(handleAjaxError);
  }

  render() {
    const { user } = this.state;
    if (!user) return <UserNotFound />
    return (
      <div>
        <h1>User Show</h1>
        <div>Name: { user.name }</div>
        <div>Age: { user.age }</div>
        <div>Address: { user.address }</div>
      </div>
    );
  }
}

export default UsersShow;
