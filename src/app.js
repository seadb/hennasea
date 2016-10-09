import React from 'react';
import About from './about';
import Logo from './logo';
import Portfolio from './portfolio';
import Contact from './contact';

const App = React.createClass({
  render: function() {
    console.log(this.props);
    return (
        <div>
            <Logo />
            <ul className="navbar">
              <li><a href="#/">about</a></li>
              <li><a href="#/portfolio">portfolio</a></li>
              <li><a href="#/how-to">how-to</a></li>
              <li><a href="#/contact">contact</a></li>
            </ul>
            <div className="content">
              {this.props.children}
            </div>
        </div>
    );
  }
});
export default App;