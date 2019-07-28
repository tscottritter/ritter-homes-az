import React from 'react';
import './Analysis.css';

export default () => (
  <div className="Analysis">
    <form accept-charset="utf-8" action="https://formspree.io/ritterhomesaz@gmail.com" method="post">
      <div className="form-group row">
        <div className="offset-sm-3 col-sm-6">
          <label for="full-name">Name</label>
          <input type="text" className="form-control" id="full-name" required />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-sm-3 col-sm-6">
          <label for="email-address">Email Address</label>
          <input type="email" className="form-control" name="_replyto" id="email-address" required />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-sm-3 col-sm-6">
          <label for="phone-number">Phone Number</label>
          <input type="text" className="form-control" id="phone-number" required />
        </div>
      </div>
      <input type="hidden" name="_subject" id="email-subject" value="Market Analysis Form Submission"></input>
      <div className="form-group row">
        <div className="offset-sm-3 col-sm-6 clearfix">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
);
