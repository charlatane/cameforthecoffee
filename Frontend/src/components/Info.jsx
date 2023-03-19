import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Alert,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { logout } from "./login/LoginActions";
import { Link } from "react-router-dom";


class PlaceOrder extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      categories: [],
    };
  }

  fetchData() {
    let usertoken = localStorage.getItem("token");
    fetch(process.env.REACT_APP_API + 'merchant/askCategory',
      {
        headers: {
          'Authorization': 'Bearer ' + usertoken
        }
      }
    )
      .then(response => response.json())
      .then((data) => {
        this.setState({
          categories: data
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  onLogout = () => {
    this.props.logout();
  };

  handleSubmit(event) {
    let usertoken = localStorage.getItem("token");
    let category = event.target.category.value;
    let path = "/place-order"+category
    this.props.history.push(path); 
  }


  render() {
    const { user } = this.props.auth;
    const categories = this.state.categories;

    const items = categories.map((post) =>
      <div class="form-check" >
        <Row>
          <Col><input type="radio" value={post.CategoryID} name="category" required />
            <label style={{ "fontSize": "18px" }}>
              &nbsp; {post.CategoryName}
            </label>
            <p style={{ "fontSize": "15px" }}>&nbsp;&nbsp; {"(You have to pay "}<random style={{ "color": "green" }}><u>{post.BuyPrice}{" taka for per gram "}</u></random>{"waste)"}</p>
            <p>{post.description}</p>
          </Col>
          <Col><img src={post.CategoryName+".png"} height="300px" width="300px" style={{"marginLeft":"100px"}}/></Col>
        </Row>

        <br />
      </div>
    );

    return (
      <div>
        <div class="center-block" id="ask-category-container" style={{ "padding": "10px", "marginTop": "30px", backgroundColor: "#ecffe6" }}>
        <p className="mt-4">
          Go back to <Link to="/logged-in-home" class="green-text">Home</Link>
        </p>
          <div class="mt-4 mb-4 mx-auto rounded pt-4 " style={{ backgroundColor: "#ecffe6" }} >
          
            <div class="text-center col log-in-div" style={{ backgroundColor: "#ecffe6", "marginTop":"0px" }} >
              <img
                src="CleanBD-logo.png" alt="CleanBD-logo"
                id="log-in-img" style={{ height: "100px" }} />
              <h2 class="green-text"><b>Place Order</b></h2>
              <p class="lead" style={{ "color": "gray"}}><i>Place order and recycle!</i></p>
              <hr />
            </div>
            <h3 hidden class="alert alert-light border mt-4 mb-4 rounded">Login Here</h3>
            <form class="needs-validation" novalidate onSubmit={this.handleSubmit}>

              <h3 class="d-flex justify-content-between align-items-center mb-3">
                <span class="green-text"  style={{ "paddingBottom": "20px"}}>&nbsp; &nbsp; Select the category of the waste you want to recycle</span><i class="bi bi-bookmark-star-fill"></i>
              </h3>
              {items}
              <button class="btn btn-dark btn-block" type="submit" >Next</button>

            </form>
          </div>
        </div>

        <div class="container center-block " id="ask-category-container" style={{ paddingTop: "0.5%" }} >

          <footer class="my-5 pt-5 text-muted text-center text-small" >
            <p class="mb-1">&copy; BillYourWaste</p>
            <ul class="list-inline" style={{ paddingBottom: "15%" }} >
              <li class="list-inline-item"><a href="#">Privacy</a></li>
              <li class="list-inline-item"><a href="#">Terms</a></li>
              <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        </div>


        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

        <script src="form-validation.js"></script>


      </div >
    );
  }
}

PlaceOrder.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(PlaceOrder));


