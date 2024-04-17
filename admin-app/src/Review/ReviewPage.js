import React, { useState } from 'react';
import './ReviewPage.css';

const reviews = [
  { customer: 'John Doe', review: 'Great product, very satisfied!' },
  { customer: 'Jane Smith', review: 'Quality could be improved.' },
  { customer: 'Alice Brown', review: 'Fast shipping and excellent customer service.' },
  { customer: 'Tom Johnson', review: 'Very durable and reliable.' },
  { customer: 'Emma Wilson', review: 'Not what I expected, but decent.' },
  { customer: 'Michael White', review: 'Loved the product, will buy again.' },
  { customer: 'Sarah Green', review: 'Packaging was good and arrived on time.' },
  { customer: 'David Lee', review: 'Product does its job well.' },
  { customer: 'Chloe Taylor', review: 'Very easy to use and install.' },
  { customer: 'Matthew Scott', review: 'The customer support was helpful.' },
];

const ReviewPage = () => {
  // Initialize a state variable to keep track of the total number of reviews
  const [reviewCount, setReviewCount] = useState(reviews.length);

  return (
    <div className="container">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h4>{review.customer}</h4>
          <p>{review.review}</p>
        </div>
      ))}
      <div>Total Reviews: {reviewCount}</div>
    </div>
  );
};

export default ReviewPage;
