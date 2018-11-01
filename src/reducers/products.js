import axios from 'axios';

// action constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// action creators
const _getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

const _addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

const _updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

const _deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

// thunks
const getProducts = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch(_getProducts(products)))
      .catch(error => console.log(error))
  };
};

const addProduct = (product) => {
  return (dispatch) => {
    return axios.post(`/api/products`, product)
      .then(res => res.data)
      .then(product => dispatch(_addProduct(product)))
      // .catch(error => console.log(error))
  };
};

const updateProduct = (product) => {
  return (dispatch) => {
    return axios.put(`/api/products/${product.id}`, product)
      .then(res => res.data)
      .then(product => dispatch(_updateProduct(product)))
  };
};

const deleteProduct = (product, history) => {
  return (dispatch) => {
      return axios.delete(`/api/products/${product.id}`)
        .then(() => dispatch(_deleteProduct(product)))
        .then(() => history.push('/admins/product-search'))
  }
};


const getProduct = (id, products) => {
  return products.find(product => product.id === id)
}

const getCategories = (products) => {
  return products.reduce(
    (result, product) => {
      product.categories.forEach(category => {
        if (!result.includes(category)) {
          result.push(category);
        }
      });
      return result;
    },
    ['All']
  );
};

const getProductByCategory = (category, products) => {
  if(category === 'All') { return products; }
  return products.reduce(
    (result, product) => {
        if (product.categories.includes(category)) {
          result.push(product);
        }
      return result;
    },
    []
  );
};

// reducer
const productReducer = (state = [], action) => {

  switch(action.type) {

    case GET_PRODUCTS:
      state = action.products
      break;

    case ADD_PRODUCT:
      state = [...state, action.product]
      break;

    case UPDATE_PRODUCT:
      state = [...state.filter(product => product.id !== action.product.id), action.product]
      break;

    case DELETE_PRODUCT:
      state = state.filter(product => product.id !== action.product.id)
      break;
  }

  return state;
}



export {
  productReducer,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getCategories,
  getProductByCategory
}
