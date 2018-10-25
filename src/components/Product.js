import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

    render() {
        const { product } = this.props;

        return (
            <div>

              <h2>Product Details</h2>

              {/* { product.name }
              { product.description } */}

            </div>
        )
    }
};

// const mapStateToProps = ({ products }, { match }) => {
//     const id = +(match.params.id)

//     const product = products.find(product.id === id);

//     return {
//       product
//     }
// };

export default connect()(Product);

