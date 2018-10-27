import React from 'react';
import { Link } from 'react-router-dom';



const ProductListing = ({ product }) => {
  
  return (
    <div>
      <Link to={ `/products/${ product.id }` }>
        <img src={ product.imageUrl } />
      </Link>

      <ul>
        <Link to={ `/products/${ product.id }` }>
          <li>{ product.title }</li>
        </Link>

        <li>{ product.description }</li>
        <li>Review:  (*) (*) (*) ( ) ( ) 3 stars</li>
        <li>{ product.price }</li>
      </ul>
    </div>
  )

}



export default ProductListing;
