import React from 'react';

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <p>My name is Sea and I'm a henna artist based out of Marquette, Michigan.
        I've been a professional henna artist certified through the ICNHA for 2 years.
        Hennasea is a company I founded out of a passion for henna as a safe, natural, and beautiful form of art.
        </p>
        
        <h2>Ingredients</h2>
        <p>The henna paste I use is homemade from freshest and safest ingredients available.
        The paste is made from powdered leaves of the 
        <a href="https://en.wikipedia.org/wiki/Henna" target="_blank"> Lawsonia inermis </a>
         plant, blended with lemon juice, sugar, and essential oils.  If you are allergic to any ingredients such as citrus
        or specific essential oils, just let me know ahead of time and I will create a custom paste
        just for you.  My henna never contains chemical additives, preservatives, or PPD.</p>

        <h2>The Designs</h2>
        <p>I have many different styles of patterns inspired by artwork from a variety of cultures.
          I'm very flexible and can adapt to many different styles of designs.
          I can do a freehand design inspired by you, or I can copy a design from a photograph.  Some examples of my designs
          are available in my portfolio above.</p>
    </div>
    );
  }
});
export default About;