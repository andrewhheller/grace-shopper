import React, { Component } from 'react';
import store from './../store';
import {getUsers} from './../reducers/UserReducer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Users from './Users';
import User from './User';
import Products from './Products';
import Product from './Product';


export default class App extends Component {
    componentDidMount(){
        store.dispatch(getUsers());
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
                            <Route path='/products/:id' component={ Product } />
                        </Switch> 
                    </div>
                </Router>
            </div>
        )
    }
}
