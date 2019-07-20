import React from 'react';
import './Analysis.css';

export default () => (
  <div className="Analysis">
    <form accept-charset="utf-8" action="https://formspree.io/scottritteraz@gmail.com" method="post">
      <div class="form-group">
        <label for="full-name">Name</label>
        <input type="text" class="form-control" id="full-name" required />
      </div>
      <div class="form-group">
        <label for="email-address">Email Address</label>
        <input type="email" class="form-control" name="_replyto" id="email-address" required />
      </div>
      <div class="form-group">
        <label for="phone-number">Phone Number</label>
        <input type="text" class="form-control" id="phone-number" required />
      </div>
      <input type="hidden" name="_subject" id="email-subject" value="Market Analysis Form Submission"></input>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
);
