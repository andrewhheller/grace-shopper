import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { updateProduct, deleteProduct } from '../../../reducers/products';
import { getProductById } from '../../../utils';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class AdminProductUpdate extends Component {

  constructor() {
    super();
    this.state = {
      product: {
        title: '',
        description: '',
        primaryImageUrl: '',
        images: '',
        price: '',
        inventory: '',
        categories: ''
      },
      tempImages: {
        image1: '',
        image2: ''
      },
      success: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImages = this.handleImages.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;

    // converts incoming category array to string of categories
    const categories = product.categories.join(', ');

    // preloads state with product data (including formatted category field)
    this.setState({ product: { ...product, categories } })
  }

  handleChange(event) {
    const { primaryImageUrl } = this.state.product;
    const { image1, image2 } = this.state.tempImages;

    const product = Object.assign({}, this.state.product, { [event.target.name]: event.target.value })
    product.images = `${primaryImageUrl}, ${image1}, ${image2}`;
    this.setState({ product })
  }

  handleSubmit(event) {
    const { onUpdateProduct } = this.props;
    const { product } = this.state;

    event.preventDefault();
    onUpdateProduct(product)
      .then(() => {
        this.setState({ success: 'Product updated successfully!' })
      })
      .catch(error => this.setState({ error: 'An error has occurred.' }));
  }

  handleDelete(product) {
    const { onDeleteProduct, history } = this.props;

    onDeleteProduct(product)
  }

  handleImages() {
    const image1 = document.getElementById('image1').value;
    const image2 = document.getElementById('image2').value;
    const tempImages = { image1, image2 }

    this.setState({ tempImages })
  }

  render() {
    const { handleChange, handleSubmit, handleDelete, handleImages } = this;
    const { success, error } = this.state;
    const { image1, image2 } = this.state.tempImages;
    const { title, description, primaryImageUrl, price, inventory, categories } = this.state.product;

    return (
      <Fragment>

        <Typography
          variant="h2"
          gutterBottom
          style={{ color: 'dodgerblue' }}
        >
          Update Product
        </Typography>

        <Typography
          variant="subtitle1"
          style={{ color: 'green', marginLeft: "25px" }}
          gutterBottom>
            { success }
          </Typography>
        
        <Typography
          variant="subtitle1"
          style={{ color: 'red', marginLeft: "25px" }}
          gutterBottom>
            { error }
        </Typography>

        <br />
        <br />

        <form onSubmit={ handleSubmit }>

        <Paper elevation={5} style={{backgroundColor: '#FFFFFF', padding: '10px', width: '900px' }}>

          <Grid
            container
            justify="flex-start"
            spacing={16}
            style={{ marginLeft: "20px", width: "700px" }}
          >

            <Grid item>
              <TextField
                required
                type="url"
                name="primaryImageUrl"
                label="primary image (URL only)"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ primaryImageUrl }
                style={{ width: "700px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                type="url"
                id="image1"
                name="image1"
                label="image-1 (URL only)"
                margin="normal"
                variant="outlined"
                onChange={ handleImages }
                value={ image1 }
                style={{ width: "700px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                type="url"
                id="image2"
                name="image2"
                label="image-2 (URL only)"
                margin="normal"
                variant="outlined"
                onChange={ handleImages }
                value={ image2 }
                style={{ width: "700px" }}
              />
            </Grid>

              <img
                src={ primaryImageUrl ? primaryImageUrl : null }
                style={{
                    width: "25%",
                    marginLeft: "10px",
                    border: primaryImageUrl ? "3px solid red" : ''
                }}
              />

              <img
                src={ image1 ? image1 : null }
                style={{ width: "25%", marginLeft: "10px" }}
              />

              <img
                src={ image2 ? image2 : null }
                style={{ width: "25%", marginLeft: "10px" }}
              />

            <br />
            <br />
            <br />

            <Grid item>
              <TextField
                required
                name="title"
                label="title"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ title }
                style={{ width: "700px" }}
              />
            </Grid>

            {/* <Grid item>
              <TextField
                name="author"
                label="author"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ author }
                style={{ width: "700px" }}
              />
            </Grid> */}

            <Grid item>
              <TextField
                id="filled-multiline-static"
                required
                multiline
                rows="5"
                name="description"
                label="description"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ description }
                style={{ width: "700px" }}
              />
            </Grid>

          </Grid>

        </Paper>

        <br />
        <br />

        <Paper elevation={5} style={{backgroundColor: '#FFFFFF', padding: '10px', width: '900px'}}>

          <Grid
            container
            justify="flex-start"
            spacing={16}
            style={{ marginLeft: "20px", width: "700px" }}
          >

            <Grid item>
              <TextField
                required
                type="number"
                step="0.01"
                name="price"
                placeholder="$0.00"
                min="0.01"
                label="price"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ price }
                style={{ width: "200px" }}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                name="inventory"
                type="number"
                step="1"
                placeholder="0"
                min="0"
                label="inventory"
                margin="normal"
                variant="outlined"
                onChange={ handleChange }
                value={ inventory }
                style={{ width: "200px" }}
              />
            </Grid>

          </Grid>

        </Paper>

        <br />
        <br />

        <Paper elevation={5} style={{backgroundColor: '#FFFFFF', padding: '10px', width: '900px' }}>

          <Grid
            container
            justify="flex-start"
            spacing={16}
            style={{ marginLeft: "20px", width: "700px" }}
          >

          <Grid item>
            <TextField
              required
              name="categories"
              label="categories (separated by comma + space)"
              margin="normal"
              variant="outlined"
              onChange={ handleChange }
              value={ categories }
              style={{ width: "700px" }}
            />
          </Grid>

          </Grid>

        </Paper>

        <br />
        <br />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: '100px' }}
        >
          Submit
        </Button>

        <Button
            type="button"
            variant="contained"
            color="secondary"
            style={{ width: '100px', marginLeft: "10px" }}
            onClick={ () => handleDelete(this.state.product) }
        >
          Delete
          <DeleteIcon />
        </Button>

        <br />
        <br />

        </form>

      </Fragment>
    )
  }


}

const mapStateToProps = ({ products }, { match }) => {
  const id = +match.params.id;
  const product = getProductById(products, id);

  return {
    product
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  console.log(history)

  return {
    onUpdateProduct: (product) => dispatch(updateProduct(product)),
    onDeleteProduct: (product) => dispatch(deleteProduct(product, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductUpdate);

