import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../../store';

class AdminUserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      email: '',
      address: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userName = this.state.userName;
    const password = this.state.password;
    const email = this.state.email;
    const address = this.state.address;
    this.props
      .addUser({
        firstName,
        lastName,
        userName,
        password,
        email,
        address,
      })
      .then(() => this.props.history.push('/admins/user-create'));
  }
  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { handleSubmit, onChange } = this;
    const {
      firstName,
      lastName,
      userName,
      password,
      email,
      address,
    } = this.state;
    return (
      <div>
        <h1>Add a User</h1>
        <form id="new-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Last:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            disabled={
              !firstName ||
              !lastName ||
              !userName ||
              !password ||
              !email ||
              !address
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AdminUserCreate);
