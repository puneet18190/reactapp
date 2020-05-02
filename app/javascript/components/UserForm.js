
import React from 'react';
import PropTypes from 'prop-types';
import { isEmptyObject, validateUser, handleAjaxError } from '../helpers/helpers';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '', 
        age: '',
        address: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    const errors = validateUser(user);

    if (!isEmptyObject(errors)) {
      this.setState({ errors });
    } else {
      this.createNewUser();
    }
  }

  createNewUser(){
    const { user } = this.state;
    axios
      .post('/api/users.json', user)
      .then((response) => {
        console.log('User Added!');
        window.location = `/users/${response.data.id}`;
      })
      .catch(handleAjaxError);
  }

  editUser(){
    const { match } = this.props;
    const userId = match.params.id;
    const { user } = this.state;

    axios
      .put(`/api/users/${userId}.json`, user)
      .then(() => {
        console.log('User updated');
        // const { users } = this.state;
        // const idx = users.findIndex(user => user.id === userId);
        // users[idx] = user;
        window.location = '/users';
      })
      .catch(handleAjaxError);
  }

  componentDidMount() {
    const { match } = this.props;
    const userId = match.params.id;

    if(userId){
      axios
        .get(`/api/users/${userId}.json`)
        .then(response => this.setState({ user: response.data }))
        .catch(handleAjaxError);
    }
  }

  render() {
    const { user } = this.state;
    const { match } = this.props;
    const userId = match.params.id;

    return (
      <div>
        <h1>{ userId ? 'Edit User' : 'New User' }</h1>

        <form className="eventForm" onSubmit={userId ? this.editUser : this.handleSubmit}>
          <div>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleInputChange}
                value={user.name}
              />
            </label><br/>

            <label>
              <strong>Age:</strong>
              <input
                type="text"
                id="age"
                name="age"
                onChange={this.handleInputChange}
                value={user.age}
              />
            </label><br/>

            <label>
              <strong>Address:</strong>
              <input
                type="text"
                id="address"
                name="address"
                onChange={this.handleInputChange}
                value={user.address}
              />
            </label><br/>

            <div className="form-actions">
              <button type="submit">Save</button>
              <Link to='/users'>Back</Link>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default UserForm;
