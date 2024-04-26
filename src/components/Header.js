import React, { Component } from "react";

class Header extends Component {
  render() {
    const { isDarkMode, onDarkModeClick } = this.props;

    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    );
  }
}

export default Header;
