import React from 'react';

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Contact</h1>
        <img className="business-card" src="img/business-cardstock.png" width="600" usemap="#bcard" />
        <map name="bcard">
          <area shape="rect" coords="452,203,689,231" alt="chelsea@bridson.me" href="google.com" />
        </map>


        <p>
        <h2><a href="mailto:chelsea@bridson.me?Subject=Henna%20Services%20Inquiry">chelsea@bridson.me</a></h2>
        </p>
        <a href="http://icnha.org/viewing/our-members/under-B/">
          <img src="img/icnha-logo.png" />
        </a><br />
        <a href="paypal.me/seadb">Donate</a>
      </div>
    );
  }
});
export default Contact;