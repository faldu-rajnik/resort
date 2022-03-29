import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
    return (<header id="home" >
    <div className="container">
        <div className="heading">
            <h1>ONE OF A KIND!<br/>Resort &amp; SPA offers CASINO to experience!</h1>
            <a href="https://search.hotellook.com/" target="_blank" className="btn-primary" rel="noreferrer">BOOK YOUR STAY</a>
        </div>
    </div>
</header>);
  }
  ReactDOM.render(<Header color="red"/>, document.getElementById('root'));
  export default Header;
  