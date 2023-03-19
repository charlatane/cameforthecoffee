import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import { login } from "./LoginActions.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(userData, "/logged-in-home");
    
  };
  render() {
    return (
      <div class="center-block " style={{ "maxWidth": "500px", "padding": "10px", "marginTop": "30px", backgroundColor: "#2D394D" }}>
        <p className="mt-4" style={{"color" : "white"}}>
          Go back to <Link to="/" class="green-text">Home</Link>
        </p>
        <div class="mt-4 mb-4 mx-auto rounded pt-4 " style={{ backgroundColor: "#2D394D" }} >
          <div class="text-center col log-in-div" style={{ backgroundColor: "#2D394D" }} >
            <img
              src="CleanBD-logo.png" alt="CleanBD-logo"
              id="log-in-img" style={{ height: "150px" }} />
            <h2 class="green-text"><b>Log In</b></h2>
            <hr />

          </div>
          <h3 hidden class="alert alert-light border mt-4 mb-4 rounded">Login Here</h3>
          <Form class="log-in-form">
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter user name"
                value={this.state.username}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Group>

            <Button className="btn btn-success btn-block" style={{ "color": "white", marginTop: "20px", fontSize: "15px" }} onClick={this.onLoginClick}>
              Login
            </Button>
            <p className="mt-2" style={{"color" : "white"}}>
              Don't have account? <Link to="/signup" class="green-text">Signup</Link>
            </p>
          </Form>
        </div>
      </div>

    );

  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(withRouter(Login));