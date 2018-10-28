import React, { Fragment } from 'react';

import { orderTotal, dateFormatter } from '../utils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const UserOrderHeading = ({ order }) => {

  return (

    <Fragment>
      <Grid container style={{ width: "85%" }} justify="space-between" spacing={16}>

        <Grid item>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
            Placed
          </Typography>

          <Typography gutterBottom variant="subtitle1">
            { dateFormatter(order.createdAt) }
          </Typography>

          <br />

        </Grid>

        <Grid item>
          <Typography variant="subtitle1">
            <span style={{ fontWeight: 'bold' }}>
              Total:<br />
            </span>
              { `$${orderTotal(order.line_items)}` } 
          </Typography>

        </Grid>

        <Grid item>
          <Typography variant="subtitle1">
            <span style={{ fontWeight: 'bold' }}>
              ID#<br/> 
            </span>
            { order.id }
          </Typography>
        </Grid>

      </Grid>

      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
        Status:
      </Typography>

      <Typography gutterBottom variant="subtitle1">
        { order.status }
      </Typography>

    </Fragment>
  )

}



export default UserOrderHeading;
