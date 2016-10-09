import React from 'react';

var Portfolio = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Portfolio</h1>
    		<a href="img/img1.png" data-lightbox="henna" data-title="Steampunk inspired design">
    			<img class="rc" src="img/img1_p.png" alt="img1" />
    		</a>
    		<a href="img/img2.png" data-lightbox="henna" data-title="Inspired by North African Henna Patterns by Catherine-Cartwright Jones">
    			<img class="rc" src="img/img2_p.png" alt="img2" />
    		</a>
    		<a href="img/img3.png" data-lightbox="henna" data-title="Kwakiutl Thunderbird from Native American Tribal Patterns by Catherine Cartwright-Jones">
    			<img class="rc" src="img/img3_p.png" alt="img3" />
    		</a>
    		<a href="img/img4.png" data-lightbox="henna" data-title="Original Design by Chelsea Bridson">
    			<img class="rc" src="img/img4_p.png" alt="img4" />
    		</a>
    		<a href="img/img6.png" data-lightbox="henna" data-title="Original Design by Chelsea Bridson">
    			<img class="rc" src="img/img6_p.png" alt="img6" />
    		</a>
    		<a href="img/img7.png" data-lightbox="henna" data-title="Original Design by Chelsea Bridson">
    			<img class="rc" src="img/img7_p.png" alt="img7" />
    		</a>
    		<a href="img/img8.jpg" data-lightbox="henna" data-title="Second Place Entry to Starving Arts Body Competition">
    		  <img class="rc" src="img/img8_p.jpg" alt="img8" />
    		</a>
      </div>
    );
  }
});
export default Portfolio;