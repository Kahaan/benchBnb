import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;

    const sessionLinks = () => (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign up</Link>
      </nav>
    );

    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={this.props.logout}>
          Log Out
        </button>
      </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
  }
}

export default Greeting;
