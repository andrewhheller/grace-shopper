import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { updateUser } from './../reducers/UserReducer';



class UserInfo extends Component {

  constructor() {
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    const { user } = this.props;

    if(!user) {
        return null;
    }

    this.setState(user)
}

componentDidUpdate(prevProps) {
    const { user } = this.props;

    if(prevProps !== this.props) {
        this.setState(user)
    }
}

handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}

handleSubmit(event) {
    const { onUpdateUser } = this.props;

    event.preventDefault();
    onUpdateUser(this.state);
}

render() {
  const { handleChange, handleSubmit } = this;
  const { firstName, lastName, email, userName, password } = this.state;

  return (

    <Fragment>

      <h1>{`${firstName}'s Account`}</h1>

      <h3>Profile</h3>

      <form onSubmit={ handleSubmit } >
        <label>first name:</label>
        <input
            required
            type="text"
            name="firstName" 
            value={ firstName }
            onChange={ handleChange }
        />

        <br />
        <br />

        <label>last name:</label>
        <input
            required
            type="text"
            name="lastName"
            value={ lastName }
            onChange={ handleChange }
        />
        <br />
        <br />

        <label>email:</label>
        <input
            required
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
        />

        <br />
        <br />

        <h3>Login / Security</h3>

        <label>username:</label>
        <input type="text" name="lastName" value={ userName } onChange={ handleChange } />

        <br />
        <br />

        <label>password:</label>
        <input type="password" name="password" value={ password } onChange={ handleChange } />

        <br/>
        <br/>

        <button>Save</button>
        </form>

        <br/>
        <br/>

      </Fragment>
    )

  }

}


// const mapStateToProps = ({ users }, { match }) => {
//   const id = parseInt(match.params.id)

//   return {
//     user: getUserById(users, id)
//   }

// }


const mapDispatchToProps = dispatch => {
return {
    onUpdateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(null, mapDispatchToProps)(UserInfo);




