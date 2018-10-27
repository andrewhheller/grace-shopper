import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid , List, ListItem, ListItemLink, ListItemText} from '@material-ui/core'

import { getUserById } from './../reducers/UserReducer';

import UserInfo from './UserInfo';
import UserOrders from './UserOrders';


class User extends Component {

    constructor() {
        super();
        this.state = {
            userArea: '' // determines which Component is rendered in main area to the right
        }

        this.handleUserArea = this.handleUserArea.bind(this);
        this.selected = this.selected.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     const { location } = this.props;
    //     const path = location.pathname;
    //     const userArea = path.substr(path.lastIndexOf('/') + 1, path.length);

    //     if(prevProps !== this.props) {
    //         this.setState({ userArea: 'UserInfo' })
    //     }
    // }

    // returns Component to render in main area (to the right) when user area button is clicked
    handleUserArea(userArea) {
        const { user } = this.props;
            
        switch(userArea) {
            case 'UserInfo':
                return <UserInfo user={ user }/>

            case 'UserOrders':
                return <UserOrders />
        }

    }

    // active button styling
    selected(currentPath) {
        const { location } = this.props;

        if(location.pathname.includes(currentPath)) {
            return true;
        }

        return false;
    }

    render() {
        const { handleUserArea, selected } = this;
        const { user } = this.props;
        const { userArea } = this.state;

        const style = {
            GridItem: { padding: 10, marginTop: 10, height: "90vh" }
        }
        
        if(!user){
            return null;
        }

        return (

            <Grid container spacing={24}>
                <Grid item sm={2} style={style.GridItem}>
                    <List>
                    
                        <ListItem
                            button onClick={ () => this.setState({ userArea: 'UserInfo' }) }
                            component={ Link } 
                            to={`/users/${ user.id }/acount-info`}
                            selected={ selected('/acount-info') }
                        >
                            <ListItemText>My Account</ListItemText>
                        </ListItem>

                        <ListItem
                            button onClick={ () => this.setState({ userArea: 'UserOrders' }) }
                            component={ Link } 
                            to={`/users/${ user.id }/orders`}
                            selected={ selected('/orders') }
                        >
                            <ListItemText>My Orders</ListItemText>
                        </ListItem>
                    
                    </List>
                </Grid>
                <Grid item sm style={style.GridItem}> 
                    { handleUserArea(userArea) } 
                </Grid>
            </Grid>

        )
    }
};

const mapStateToProps = ({ users }, { match }) => {
    const id = parseInt(match.params.id)

    return {
        user: getUserById(users, id)
    }
};

export default connect(mapStateToProps)(User);

