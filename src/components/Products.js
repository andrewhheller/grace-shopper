import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {

  return (
    <div>

      <h2>List of all products: </h2>

      <table>

          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>

            {
              products.map(product => {
                return (
                  <tr>
                    <td>
                      <Link to={`/products/${product.id}`}>
                        { product.name }
                      </Link>
                    </td>
                    <td>{ product.description }</td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = ({ products }) => {
    return {
      products
    };
};

export default connect(mapStateToProps)(Products);
