import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';




const UserOrders = ({ user }) => {

  return (
    <Fragment>
      <Typography
        variant="h2"
        gutterBottom
        style={{ color: 'dodgerblue' }}
      >
        My Orders
      </Typography>
    </Fragment>
  )

}


export default UserOrders;
