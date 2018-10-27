import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Products(props) {
  const { products } = props;
    if(!products){
        return null;
    }
    return (
        <div className='productsContainer'>
            <Grid container spacing={24}>
                {
                    products.map(product => {
                        return (
                            <Grid key={product.id} item xs={9} sm={6}>
                                <ProductCard className='productCard' product={product}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
