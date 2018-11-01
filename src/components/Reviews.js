import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
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
        <CardHeader title="Product Reviews:" />
        {filterReviews.map(review => (
          <Review review={review} key={review.id} />
        ))}

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="subheading">Write a Review</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form id="review-form" onSubmit={handleSubmit}>
              <TextField
                id="standard-textarea"
                label="Review:"
                name="text"
                multiline
                rows="4"
                fullWidth
                value={text}
                onChange={onChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="name"
                label="UserId"
                name="userId"
                value={userId}
                fullWidth
                onChange={onChange}
                margin="normal"
              />
              <FormControl style={{ minWidth: 60 }}>
                <InputLabel shrink htmlFor="rating">
                  Rating
                </InputLabel>
                <Select
                  value={rating}
                  fullWidth
                  onChange={onChange}
                  inputProps={{
                    name: 'rating',
                  }}
                >
                  <MenuItem value="">Please Select</MenuItem>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
              <Divider />
              <Button type="submit" disabled={!text || !userId || !rating}>
                Submit
              </Button>
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
