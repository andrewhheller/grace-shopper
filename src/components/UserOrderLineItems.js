import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { getProductById } from '../utils';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';



const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "dodgerblue",
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 18,
    backgroundColor: "white"
  }
}))(TableCell);



const UserOrderLineItems = ({ order, products }) => {

  return (

    <Table>

      <TableHead>

        <TableRow>
          <CustomTableCell>Item</CustomTableCell>
          <CustomTableCell numeric style={{ textAlign: 'center' }}>QTY</CustomTableCell>
          <CustomTableCell numeric style={{ textAlign: 'center' }} >Price</CustomTableCell>
          <CustomTableCell numeric style={{ textAlign: 'center' }} >Subtotal</CustomTableCell>
          <CustomTableCell style={{ textAlign: 'center' }}></CustomTableCell>
        </TableRow>

      </TableHead>

      <TableBody>

        {
          order.line_items.map(line_item => {

            return (

              <TableRow key={line_item.id}>

                <CustomTableCell component="th" scope="row">
              
                  <Link to={ `/products/${line_item.productId}` } style={ {textDecoration: 'none'} } >
                    { getProductById(products, line_item.productId).title }
                  </Link>

                </CustomTableCell>

                <CustomTableCell style={{ textAlign: 'center' }} component="th" scope="row">
                  { line_item.quantity }
                </CustomTableCell>

                <CustomTableCell style={{ textAlign: 'center' }} component="th" scope="row">
                  { `$${ line_item.price }` }
                </CustomTableCell>

                <CustomTableCell style={{ textAlign: 'center' }} component="th" scope="row">
                  { `$${ line_item.quantity * line_item.price }` }
                </CustomTableCell>

                <CustomTableCell style={{ textAlign: 'center' }} component="th" scope="row">
                  <Button variant="outlined" color="primary" size="small">
                    Review
                  </Button>
                </CustomTableCell>

              </TableRow>

            )

          })
        }

      </TableBody>

    </Table>
  )

}



export default UserOrderLineItems;
