import React, { Component } from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
const Review = ({ review, users }) => {
  const reviewer = users.find(user => user.id === review.userId);
  return (
    <CardContent>
      <Typography>Review: {review.text}</Typography>
      <Typography>Rating: {review.rating}</Typography>
      <Typography>Written By: {reviewer.userName}</Typography>
    </CardContent>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Review);
