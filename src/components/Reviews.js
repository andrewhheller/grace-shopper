import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { connect } from 'react-redux';
import Review from './Review';
import { createReview } from './../store';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      userId: '',
      rating: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const text = this.state.text;
    const productId = this.props.id;
    const userId = this.state.userId;
    const rating = this.state.rating;
    this.props.createReview({
      text,
      rating,
      productId,
      userId,
    });
  }
  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { id, reviews } = this.props;
    const { handleSubmit, onChange } = this;

    const { text, userId, rating } = this.state;
    const filterReviews = reviews.filter(review => review.productId === id);
    return (
      <Card>
        <CardHeader title="Products Review:" />
        {filterReviews.map(review => (
          <Review review={review} key={review.id} />
        ))}

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="subheading">Write a Review</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form id="new-review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="text">Review</label>
                <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user">UserId</label>
                <input
                  type="text"
                  name="userId"
                  value={userId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating: </label>
                <select
                  type="text"
                  name="rating"
                  value={rating}
                  onChange={onChange}
                >
                  <option value="">Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button type="submit" disabled={!text || !userId || !rating}>
                Submit
              </button>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

const mapStateToProps = ({ reviews }) => {
  return {
    reviews,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
