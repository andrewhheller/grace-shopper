import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Tabs, Tab } from '@material-ui/core'

import AdminHome from './AdminHome';
import AdminUserMain from './UserMgt/AdminUserMain';
import AdminProductMain from './ProductMgt/AdminProductMain';
import AdminOrderMain from './OrderMgt/AdminOrderMain';




class Admin extends Component {
    
    constructor() {
        super()
        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    render() {
        const { handleChange } = this;
        const { location } = this.props;
        const { value } = this.state;

        return (
            <Fragment>
                <Tabs value={ value } onChange={ handleChange } centered >

                    <Tab
                        label="Home"
                        component={ Link }
                        to="/admins"
                    />

                    <Tab
                        label="Users"
                        component={ Link }
                        to="/admins/users"
                    />
                               
                    <Tab
                        label="Products"
                        component={ Link }
                        to="/admins/products"
                    />

                    <Tab
                        label="Orders"
                        component={ Link }
                        to="/admins/orders"
                    />
                    
                </Tabs>
                { value === 0 && <AdminHome />}
                { value === 1 && <AdminUserMain />}
                { value === 2 && <AdminProductMain location={ location } />}
                { value === 3 && <AdminOrderMain />}

            </Fragment>
        )
    }
}


export default Admin;
