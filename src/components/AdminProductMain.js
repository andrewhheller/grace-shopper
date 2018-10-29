import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const searchProducts = (products, search) => {

    // creates regex pattern, to search for - 
    // in any part of field, and
    // ignore case
    const pattern = new RegExp([search], 'gi')
    
    // return all user objects that match search in field passed in as arg
    return products.filter(product => Object.values(product).toString().search(pattern) !== -1);
  }

class ProductMgtMain extends Component {
    
    constructor() {
        super();
        this.state = {
            search: '',
            products: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowAllProducts = this.handleShowAllProducts.bind(this);
    }

    componentDidMount() {
        const { products } = this.props;

        this.setState({ products })
    }

    handleChange(event) {
        this.setState({ search: event.target.value })
    }

    handleSubmit(event) {
        const { products } = this.props;
        const { search } = this.state;

        event.preventDefault();
        this.setState({ products: searchProducts(products, search) })
    }

    // toggle to show all products again
    handleShowAllProducts() {
        this.setState({ products: this.props.products })
    }


    render() {
        const { handleChange, handleSubmit, handleShowAllProducts } = this;
        const { products } = this.state;

    return (
        
        <Fragment>

            <h1>Product Management</h1>

            <button>Add New Product</button>

            <form onSubmit={ handleSubmit }>
                <label>Search for product:</label>
                <input type="text" name="search" onChange={ handleChange } />
                <button type="submit">Search</button>
                <button type="button" onClick={ () => handleShowAllProducts() }>Show All products</button>
            </form>   

            <br />
            <br />

            <table>
                <tbody>
                    <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Inventory</th>
                    <th>Price</th>
                    </tr>
                        {
                            products.map(product => {
                                return (
                                <tr key={ product.id }>
                                    <td>
                                        <Link to={`/products/${product.id}`}>
                                            { product.title }
                                        </Link>
                                    </td>
                                    <td>---</td>
                                    <td>{ product.inventory }</td>
                                    <td>{ product.price }</td>
                                </tr>
                                )
                            })
                        }
                </tbody>
            </table>

        </Fragment>
    )
}
}

const mapStateToProps = ({ products }) => {

    return {
        products
    };
};

export default connect(mapStateToProps)(ProductMgtMain);
