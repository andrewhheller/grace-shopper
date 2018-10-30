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

    componentDidMount() {
        const { location } = this.props;
        const path = location.pathname;
        const url = path.substr(path.lastIndexOf('/') + 1, path.length);

        if(url === 'users'){
            this.setState({ value: 1 })
        }
        else if(url === 'products') {
            this.setState({ value: 2 })
        }
        else if(url === 'orders') {
            this.setState({ value: 3 })
        }
        else if(url === 'admins') {
            this.setState({ value: 0 })
        }
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

                <div style={{ height: "25px" }}></div>

                { value === 0 && <AdminHome />}
                { value === 1 && <AdminUserMain />}
                { value === 2 && <AdminProductMain location={ location } />}
                { value === 3 && <AdminOrderMain />}

            </Fragment>
        )
    }
}


export default Admin;
