import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';
const CREATE_REVIEW = 'CREATE_REVIEW';

const _getReviews = reviews => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};
const _createReview = review => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};

export const getReviews = () => {
  return dispatch => {
    axios
      .get(`/api/reviews`)
      .then(response => response.data)
      .then(reviews => dispatch(_getReviews(reviews)));
  };
};

export const createReview = review => {
  return dispatch => {
    axios
      .post(`/api/reviews`, review)
      .then(response => response.data)
      .then(review => dispatch(_createReview(review)));
  };
};

export const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    case CREATE_REVIEW:
      return [...state, action.review];
    default:
      return state;
  }
};
