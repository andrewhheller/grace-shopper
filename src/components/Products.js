import React from 'react';
import { connect } from 'react-redux';

import ProductListing from './ProductListing';

const Products = ({ products }) => {
  return (
    <div>
      <h2>All Products:</h2>
      {products.map(product => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(Products);
