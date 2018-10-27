import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductById } from '../utils';

class Product extends Component {

    render() {
        const { product } = this.props;

        if(!product) {
            return null;
        }

        return (
            
            <div>

              <h2>Product Details</h2>

              <img src={ product.imageUrl } />

              <ul>
                <li>{ product.title }</li>
                <li>{ product.description }</li>
                <li>{ product.price }</li>
                <li>{ product.inventory }</li>
                <li>Review:  (*) (*) (*) ( ) ( ) 3 stars</li>
              </ul>

            </div>
        )
    }
};

const mapStateToProps = ({ products }, { match }) => {
    const id = parseInt(match.params.id)

    return {
      product: getProductById(products, id)
    }
}


export default connect(mapStateToProps)(Product);

