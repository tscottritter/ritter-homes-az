import React, { Component } from 'react';
import './Reviews.css';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  };

  componentDidMount() {
    fetch('https://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz1h93cstej2j_4aijl&email=scott@towerseekers.com&&count=10&output=json')
      .then(res => res.json())
      .then(data => {
        this.setState({ reviews: data.response.results.proReviews.review })
      });
  }

  render() {
    const reviewsList = this.state.reviews.map((review, index) => (
      <div key={index} className="card">
        <div className="card-header card-title text-left">
          <strong>{review.rating} stars</strong>
        </div>
        <div className="card-body">
          <p className="card-text text-left">{review.description}</p>
          <a href={review.reviewURL} className="btn btn-sm btn-primary right" target="_blank" rel="noopener noreferrer">View Full Review</a>
        </div>
        <div className="card-footer text-muted text-right">
          {review.reviewer} on {review.reviewDate}
        </div>
      </div>
    ))

    return (
      <div className="Reviews">
        <iframe title="Testimonial Tuesday playlist" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=UUnNMG8EYVlKTXZgYWmroiRg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="card-deck">
            { reviewsList || "Loading reviews..." }
        </div>
        <a className="btn btn-success" href="https://www.zillow.com/profile/Frederick-S-Ritter/#reviews" target="_blank" rel="noopener noreferrer">View More Reviews</a>
      </div>
    )
  }
}

export default Reviews;
