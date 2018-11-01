import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../../store';
import { Grid, Button, TextField, Typography, Paper } from '@material-ui/core';

class AdminUserCreate extends Component {
  constructor() {
    super();
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
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userName = this.state.userName;
    const password = this.state.password;
    const email = this.state.email;
    const address = this.state.address;
    evt.preventDefault();
    this.props.addUser({
      firstName,
      lastName,
      userName,
      password,
      email,
      address,
    });
    //.then(() => this.props.history.push('/admins/users'));
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
    const isValidEmail = email => {
      const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      return regExp.test(String(email));
    };

    return (
      <Grid container justify="center">
        <Grid item xs>
          <div>
            <Grid container justify="center">
              <Grid item>
                <Paper elevation={1}>
                  <form id="create-user">
                    <Typography variant="title">Add A User</Typography>

                    <TextField
                      required
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      value={firstName}
                      onChange={onChange}
                    />

                    <TextField
                      required
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      value={lastName}
                      onChange={onChange}
                    />

                    <TextField
                      required
                      name="userName"
                      label="Username"
                      variant="outlined"
                      value={userName}
                      onChange={onChange}
                    />

                    <TextField
                      required
                      name="password"
                      label="Password"
                      variant="outlined"
                      value={password}
                      type="password"
                      onChange={onChange}
                    />

                    <TextField
                      required
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={onChange}
                      error={email.length > 0 && !isValidEmail(email)}
                    />

                    <TextField
                      required
                      name="address"
                      label="Address"
                      variant="outlined"
                      value={address}
                      onChange={onChange}
                    />

                    <Button
                      type="submit"
                      disabled={
                        !firstName ||
                        !lastName ||
                        !userName ||
                        !password ||
                        !email ||
                        !address ||
                        !isValidEmail(email)
                      }
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
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
