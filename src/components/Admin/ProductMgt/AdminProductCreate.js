import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class AdminProductCreate extends Component {

  constructor() {
    super();
    this.state = {
      product: {
        title: '',
        author: '',
        description: '',
        primaryImageUrl: '',
        price: '',
        inventory: '',
        categories: []
      },
      status: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const product = Object.assign({}, this.state.product, { [event.target.name]: event.target.value })
    this.setState({ product })
}

  render() {
    const { handleChange } = this;
    const { title, author, description, primaryImageUrl, price, inventory } = this.state.product;

    return (
      <Fragment>

        <Typography
          variant="h2"
          gutterBottom
          style={{ color: 'dodgerblue' }}
        >
          Create Product
        </Typography>

        <Grid container justify="flex-start" spacing={16} style={{ marginLeft: "20px", width: "700px" }}>

          <form>
            <label>Upload Photo:</label>
            <br />
            <input type="file" name="photo" />

            <br />
            <br />

            <Grid item>
              <TextField
                required
                name="title"
                label="title"
                margin="normal"
                variant="filled"
                onChange={ handleChange }
                value={ title }
                style={{ width: "700px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                name="author"
                label="author"
                margin="normal"
                variant="filled"
                onChange={ handleChange }
                value={ author }
                style={{ width: "700px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                multiline
                rowsMax="5"
                type=""
                name="description"
                label="description"
                margin="normal"
                variant="filled"
                onChange={ handleChange }
                value={ description }
                style={{ width: "700px" }}
              />
            </Grid>

            
          </form>


        </Grid>


      </Fragment>
    )
  }


}


export default AdminProductCreate;
