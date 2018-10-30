import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid , List, ListItem, ListItemLink, ListItemText} from '@material-ui/core'
import { Tabs, Tab } from '@material-ui/core'

import AdminUserCreate from './AdminUserCreate';

class AdminMain extends Component {
    
    constructor() {
        super()
        this.state = {
            adminArea: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
        // const { location } = this.props;
        // const path = location.pathname;
        // const url = path.substr(path.lastIndexOf('/') + 1, path.length);

        // if(url === 'users-create'){
        //     this.setState({ adminArea: 'users' })
        // }
        // else if(url === 'myorders') {
        //     this.setState({ userArea: 'myorders' })
        // }
    // }

    // returns Component to render in main area when admin area tab is clicked
    handleAdminArea(adminArea) {

        switch(adminArea) {
            case 'users-create':
                return <AdminUserCreate />
        }

    }

    handleChange(adminArea) {
        this.setState({ adminArea });
      };

    render() {
        const { handleAdminArea, handleChange } = this;
        const { adminArea } = this.state

        return (
            <Fragment>
                <Tabs value={ adminArea } onChange={ handleChange(adminArea) } centered >

                    <Tab
                        label="Users"
                        component={ Link }
                        to="/admins/users-create"
                    />
                               
                    <Tab
                        label="Products"
                        component={ Link }
                        to="/admins/products-create"
                    />

                    <Tab
                        label="Orders"
                        component={ Link }
                        to="/admins/orders"
                    />
                    
                </Tabs>
                {/* { value === 0 && <AdminUserMgt />}
                { value === 1 && <AdminProductMainq />}
                { value === 2 && <AdminOrderMgt />} */}

{/*         <Grid container spacing={24}>

                <Grid item sm={2} style={style.GridItem}>
                    <List>
                    
                        <ListItem
                            button onClick={ () => this.setState({ userArea: 'myaccount' }) }
                            component={ Link } 
                            to={`/users/${ user.id }/myaccount`}
                            selected={ selected('/myaccount') }
                        >
                            <ListItemText>My Account</ListItemText>
                        </ListItem>

                        <ListItem
                            button onClick={ () => this.setState({ userArea: 'myorders' }) }
                            component={ Link } 
                            to={`/users/${ user.id }/myorders`}
                            selected={ selected('/myorders') }
                        >
                            <ListItemText>My Orders</ListItemText>
                        </ListItem>
                    
                    </List>
                </Grid>
                <Grid item sm style={style.GridItem}> 
                    { handleUserArea(userArea) } 
                </Grid>
            </Grid> */}


            </Fragment>
        )
    }
}


export default connect()(AdminMain);
