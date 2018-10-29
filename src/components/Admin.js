import React, { Component, Fragment } from 'react'

import { Grid , List, ListItem, ListItemLink, ListItemText} from '@material-ui/core'
import { Tabs, Tab } from '@material-ui/core'

import AdminUserMgt from './AdminUserMgt';
import AdminProductMain from './AdminProductMain';
import AdminOrderMgt from './AdminOrderMgt';

class Admin extends Component {
    
    constructor() {
        super()
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)     
    }

    handleChange(event, value) {
        this.setState({ value })
    }

    render() {
        const { value } = this.state
        const { handleChange } = this

        return (
            <Fragment>
                <Tabs value={value} onChange={handleChange} centered >
                    <Tab label="Users" />
                    <Tab label="Products" />
                    <Tab label="Orders" />
                </Tabs>
                { value === 0 && <AdminUserMgt />}
                { value === 1 && <AdminProductMainq />}
                { value === 2 && <AdminOrderMgt />}

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

export default Admin
