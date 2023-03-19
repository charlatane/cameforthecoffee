import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { setAxiosAuthToken } from "../../utils/Utils";
import { login } from "../login/LoginActions.js";
import { toast } from "react-toastify";
import {
  Alert,
  Button,
  Row,
  Container,
  Col,
  Form,
  FormControl
} from "react-bootstrap";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.ConfirmPassword = this.ConfirmPassword.bind(this);
    this.onSignupClick = this.onSignupClick.bind(this);
    this.state = {
      username: "",
      password: "",
      email: "",
      repassword: "",
      acctype: "",
      usernameError: "",
      passwordError: "",
      emailError: "",
      status: ""
    };
  }
  ConfirmPassword = e => {
    e.preventDefault();
    if (this.state.password == this.state.repassword) {
      this.onSignupClick();
    }
    
    else {
      toast.error("Please confirm your password.", {position: "top-center"});
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignupClick = () => {
    
    this.setState({
      usernameError: "",
      emailError: "",
      passwordError: "",
      status: ""
    });

    const userData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    setAxiosAuthToken("");
    axios
      .post("/api/v1/users/", userData)
      .then(response => {
        this.setState({ status: "success" });
        
        const userInfo = {
          username: this.state.username,
          password: this.state.password
        }

        this.props.login(userInfo, "/logged-in-home");

        // if (this.state.acctype == 'seller') {
        //   this.props.login(userInfo, "/merchant");
        // }

        // else {
        //   this.props.login(userInfo, "/consumer");
        // }

      })
      .catch(error => {
        if (error.response) {
          if (error.response.data.hasOwnProperty("username")) {
            this.setState({ usernameError: error.response.data["username"] });
          }
          if (error.response.data.hasOwnProperty("email")) {
            this.setState({ emailError: error.response.data["email"] });
          }
          if (error.response.data.hasOwnProperty("password")) {
            this.setState({ passwordError: error.response.data["password"] });
          }
          if (error.response.data.hasOwnProperty("detail")) {
            this.setState({ status: "error" });
          }
        } else {
          this.setState({ status: "error" });
        }
      });
  };

  render() {
    let errorAlert = (
      <Alert variant="danger">
        <Alert.Heading>Problem during account creation</Alert.Heading>
        Please try again or contact service support for further help.
      </Alert>
    );

    let successAlert = (
      <Alert variant="success">
        <Alert.Heading>Account created</Alert.Heading>
      </Alert>
    );

    const form = (
      <signup style={{ backgroundColor: "#2D394D" }} class="text-center sign-body">
        <main class="form-signin">
          <Form onSubmit={this.ConfirmPassword} >
            <img class="mb-4" src="logo-png.png" alt="CleanBD-logo" width="100" height="100" />
            <h2 class="green-text" style={{ paddingBottom: "10px" }}><b>Sign Up</b></h2>
            <Form.Group controlId="usernameId">
              <Form.Control
                isInvalid={this.state.usernameError}
                type="text"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onChange}
                required
              />
              <FormControl.Feedback type="invalid">
                {this.state.usernameError}
              </FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="emailId">

              <Form.Control
                isInvalid={this.state.emailError}
                type="text"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
              <FormControl.Feedback type="invalid">
                {this.state.emailError}
              </FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="passwordId">

              <Form.Control
                isInvalid={this.state.passwordError}
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.password}
                onChange={this.onChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {this.state.passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="repasswordId">

              <Form.Control
                isInvalid={this.state.passwordError}
                type="password"
                name="repassword"
                placeholder="Confirm password"
                value={this.repassword}
                onChange={this.onChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {this.state.passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            {/* <div class="checkbox mb-3 inline">
              
              <label class="acc-type" style={{fontSize:"16px", marginTop:"20px"}} >
                <input type="radio" value="seller" name="acctype" onChange={this.onChange} required /><b> MERCHANT (Seller) </b>
              </label>
              <label class="acc-type" style={{fontSize:"16px", marginTop:"10px", marginBottom:"40px"}} >
                <input type="radio" value="buyer" name="acctype" onChange={this.onChange} required /><b> CONSUMER (Buyer) </b>
              </label>
            </div> */}
            <button class="btn btn-success about-btn btn-block" type="submit" style={{fontSize: "20px" }} >Sign up</button>
          </Form>
          

        </main>
      </signup>
    );

    let alert = "";
    if (this.state.status === "error") {
      alert = errorAlert;
    } else if (this.state.status === "success") {
      alert = successAlert;
    }

    return (
      <Container style={{ "paddingTop": "20px" }}>
        <p className="mt-4">
              Go back to <Link to="/" class="green-text">Home</Link>
        </p>
        <Row style={{ backgroundColor: "#ecffe6" }}>
          <Col>
            {alert}
            {this.state.status !== "success" && form}
            <p className="mt-2">
              Already have an account? <Link to="/login" class="green-text">Login</Link>
            </p>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

Signup.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(withRouter(Signup));
