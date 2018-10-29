import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import UserOrder from './UserOrder';


const UserOrders = ({ orders }) => {

  return (
    <Fragment>

      <Typography
        variant="h2"
        gutterBottom
        style={{ color: 'dodgerblue' }}
      >
        My Orders
      </Typography>

      <br />
      <br />

      {
        orders.map(order => <UserOrder key={ order.id } order={ order } />)
      }
      
    </Fragment>
  )

}

const mapStateToProps = ({ orders }) => {
  return {
    orders: orders.filter(order => order.type === 'ORDER')
  }
}


export default connect(mapStateToProps)(UserOrders);
