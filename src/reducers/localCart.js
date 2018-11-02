const UPDATE_LOCAL_CART = 'UPDATE_LOCAL_CART'

const _updateLocalCart = (cart) => ({ type: UPDATE_LOCAL_CART, cart })
const getLocalCart = () => JSON.parse(window.localStorage.getItem('cartItems'))
const setLocalCart = (cartItems) => window.localStorage.setItem('cartItems', JSON.stringify(cartItems))

const resetLocalCart = () => {
    return (dispatch) => {
        window.localStorage.removeItem('cartItems')
        dispatch(_updateLocalCart([]))
    }
}

const createLineItemInLocalCart = (item) => {
    return (dispatch) => {
        const cartItems = getLocalCart()
        const updatedItems = cartItems ? [...cartItems, item] : [item]
        setLocalCart(updatedItems)
        dispatch(_updateLocalCart(updatedItems))
    }
}

const deleteLineItemFromLocalCart = (productId) => {
    return (dispatch) => {
        const cartItems = getLocalCart()
        const updatedItems = cartItems.filter(item => item.productId !== productId);
        setLocalCart(updatedItems)
        dispatch(_updateLocalCart(updatedItems))
    }
}

const updateLineItemInLocalCart = (item) => {
    return (dispatch) => {
        const cartItems = getLocalCart()
        const updatedItems = cartItems.map(element => element.productId !== item.productId ? element : item);
        setLocalCart(updatedItems)
        dispatch(_updateLocalCart(updatedItems))
    }
}

const initialState = getLocalCart() ? getLocalCart() : []

const localCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_LOCAL_CART:
            return action.cart
        default:
            return state
    }
}

export { localCartReducer, createLineItemInLocalCart, deleteLineItemFromLocalCart, updateLineItemInLocalCart, resetLocalCart }
    
