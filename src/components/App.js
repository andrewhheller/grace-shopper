import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './../store';
import { getUsers } from './../reducers/UserReducer';
import { getProducts } from '../reducers/products';

import Nav from './Nav';
import Users from './Users';
import User from './User';
import Products from './Products';
import ProductDetails from './ProductDetails';


export default class App extends Component {
    componentDidMount(){
        store.dispatch(getUsers());
        store.dispatch(getProducts());
    }

    render() {
        return (
            <div id = 'main'>
                <Router>
                    <div>
                        <Route component={ Nav } />
                        <Switch>
                            <Route exact path='/users' component={ Users } />
                            <Route path='/users/:id' component={ User } />
                            <Route exact path='/products' component={ Products } />
                            <Route path='/products/:id' component={ ProductDetails } />
                        </Switch> 
                    </div>
                </Router>
            </div>
        )
    }
}
