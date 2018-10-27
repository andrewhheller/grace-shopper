import React, { Component, Fragment } from 'react';
import { getUsers, exchangeTokenForAuth } from '../store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import Users from './Users';
import User from './User';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Home from './Home';
import Login from './Login';
import RegisterUser from './RegisterUser';
import AdminManagement from './AdminManagement';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.exchangeTokenForAuth();
  }

  render() {
    console.log(this.props.history);
    return (
      <Router>
        <Fragment>
          <Route path="/" render={({ history }) => <Nav history={history} />} />
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={User} />
            <Route
              path="/login"
              render={({ history }) => <Login history={history} />}
            />
            <Route path="/register" component={RegisterUser} />
            <Route path="/adminManagement" component={AdminManagement} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    exchangeTokenForAuth: () => dispatch(exchangeTokenForAuth()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
