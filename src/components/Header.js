import React from 'react';
import './Header.css';
class Header extends React.Component {
    render(){
      return (
        <header>
            <div id="header-container">
                <h1 id="headerTitle">Things to do</h1>
            </div>
        </header>
      )
    }
  }
  
  export default Header;