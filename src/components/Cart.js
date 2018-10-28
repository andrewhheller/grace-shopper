import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Typography, Grid, IconButton, Button } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import ItemQuantity from './ItemQuantity'
//import { getCartWithItems, placeOrder, deleteLineItemFromCart, updateLineItemInCart } from '../store'

/** TO DO: Orders need to be added to store and then the comments uncommented. 
 * Using Fake Data because of pending merge on store.js to avoid conflicts
 **/
class Cart extends Component {

    constructor() {
        super()
        this.updateQuantity = this.updateQuantity.bind(this)
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
        this.handlePlaceOrder = this.handlePlaceOrder.bind(this)
    }

   updateQuantity(quantity, cartId, price, itemId) {
       //const { userId } = this.props
        //this.props.updateLineItemInCart(cartId, quantity, itemId, price, userId)
    }


    handleRemoveFromCart(cartId, itemId) {
        //const { userId } = this.props
        //this.props.deleteLineItemFromCart(cartId, itemId, userId)
    }

    handlePlaceOrder() {
        //const { id } = this.props.cart
        //const { userId } = this.props
        //this.props.placeOrder({ id, status: 'ORDER' }, userId)
    }

    render() {
        //const { cart } = this.props
        const cart = getFakeCart()
        const { handlePlaceOrder, handleRemoveFromCart, updateQuantity } = this
        const totalAmount = calculateTotalAmount(cart)

        return (
            <Fragment>
                <Typography variant="title" style={{marginTop: "10vh", marginBottom: "5vh", fontWeight: "bold"}}>
                {
                    !cart.line_items.length ? "Cart is empty" : "Shopping Cart"
                }
                </Typography>
                {
                    !cart.line_items.length
                        ? ""
                        : <Fragment>
                            <Grid container justify="center" >
                            {
                                cart.line_items.map(item => 
                                    <Grid container key={item.id} style={{marginTop: "5vh"}}>
                                        <Grid container justify="center" style={{display:"flex"}} spacing={0}>
                                            <Grid item xs>
                                                <Typography variant="subheading">{item.product}</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <img src={item.productImageUrl} style={{height: "20vh" }}/>
                                            </Grid>
                                            <Grid item xs>
                                                <ItemQuantity updateQuantity={updateQuantity} cartId={cart.id} itemId={item.id} quantity={item.quantity} />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant="subheading">{`$ ${item.productPrice}`}</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <IconButton onClick={() => handleRemoveFromCart(cart.id, item.id)} variant="outlined" color="secondary">
                                                    <Clear />
                                                </IconButton> 
                                            </Grid>
                                        </Grid>          
                                </Grid>
                                )
                            }
                            </Grid>
                            <Grid container style={{marginTop: "10vh"}}>
                                <Grid item xs>
                                    <Typography variant="subheading" style={{fontWeight: "bold"}}>
                                        {`Total Amount: $ ${totalAmount}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container style={{marginTop: "1vh"}}>
                                <Grid item xs>
                                    <Button onClick={handlePlaceOrder} variant="contained" color="default"> Place Order </Button>
                                </Grid>
                           </Grid>
                            </Fragment>
                }
            </Fragment>
        )
    }

}

const calculateTotalAmount = (cart) => {
    let result = 0
    cart.line_items.forEach(item => {
        result += item.quantity * parseFloat(item.productPrice).toFixed(2)
    })
    return result
}

const mapStateToProps = (state) => {
    //const { orders, products, authenticatedUser } = state
    return {
        //cart: getCartWithItems(orders, products),
        //userId: authenticatedUser.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //placeOrder: (order, userId) => dispatch(placeOrder(order, userId)),
        //deleteLineItemFromCart: (cartId, itemId, userId) => dispatch(deleteLineItemFromCart(cartId, itemId, userId)),
        //updateLineItemInCart: (cartId, quantity, itemId, price, userId) => 
        //    dispatch(updateLineItemInCart(cartId, { quantity, price }, itemId, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

/** This will be removed once connected to store */
const getFakeCart = () => {
    return {
        "id": "218fe742-63d1-497b-a773-c1553c9446dc",
        "type": "CART",
        "status": "CREATED",
        "createdAt": "2018-10-28T02:09:10.702Z",
        "updatedAt": "2018-10-28T02:09:10.702Z",
        "userId": 1,
        "line_items": [
        {
        "id": 9,
        "quantity": 2,
        "price": "20",
        "createdAt": "2018-10-28T02:09:10.775Z",
        "updatedAt": "2018-10-28T02:09:10.775Z",
        "orderId": "218fe742-63d1-497b-a773-c1553c9446dc",
        "productId": 3,
        "product": "Product # 3",
        "productImageUrl": "https://picsum.photos/200/300/?image=3",
        "productPrice": "20"
        },
        {
        "id": 10,
        "quantity": 1,
        "price": "100",
        "createdAt": "2018-10-28T02:09:10.775Z",
        "updatedAt": "2018-10-28T02:09:10.775Z",
        "orderId": "218fe742-63d1-497b-a773-c1553c9446dc",
        "productId": 4,
        "product": "Product # 4",
        "productImageUrl": "https://picsum.photos/200/300/?image=4",
        "productPrice": "20"
        }
        ]
        }
}