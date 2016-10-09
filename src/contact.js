import React from 'react';

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Contact</h1>
        <img src="img/business-cardstock.png" width="600" usemap="#bcard" />
        <map name="bcard">
          <area shape="rect" coords="452,203,689,231" alt="chelsea@bridson.me" href="google.com" />
        </map>


        <p>
        <h2><a href="mailto:chelsea@bridson.me?Subject=Henna%20Services%20Inquiry">chelsea@bridson.me</a></h2>
        </p>
      </div>
    );
  }
});
export default Contact;