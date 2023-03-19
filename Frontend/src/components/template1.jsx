import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { logout } from "./login/LoginActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class template1 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      info: [],
    };
  }

  fetchData() {
    let usertoken = localStorage.getItem("token");
    fetch(process.env.REACT_APP_API + window.location.pathname,
      {
        headers: {
          'Authorization': 'Bearer ' + usertoken
        }
      }
    )
      .then(response => response.json())
      .then((data) => {
        this.setState({
          info: data
        });

       

      });
  }

  componentDidMount() {
    this.fetchData();
  }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }

    onLogout = () => {
        this.props.logout();
    };

    handleSubmit(event) {
        event.preventDefault();
        let usertoken = localStorage.getItem("token");

        fetch(process.env.REACT_APP_API + 'consumer/template1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + usertoken

            },
            body: JSON.stringify({
                'details': event.target.details.value,
                'path': window.location.pathname
            })
        })
            .then(res => res.json())
            .then((result) => {
                if (result == true) {
                    this.props.history.push('/not-received');
                    toast.info("Thank you for placing the order! If you have any query feel free to contact us. We will reach you though your contact number/email regarding the delivery of your order.",
                        { position: "top-center", autoClose: false });
                }
                else toast.error("Error Occurred!", { position: "top-center" });
            },
                (error) => {
                    toast.error("Error Occurred!", { position: "top-center" });
                })

    }

    render() {
      const { user } = this.props.auth;

        return (
            <div class="cvbody">
            <div class="cvcontainer">
              <div class="left_Side">
                <div class="profileText">
                  <div class="imgBx">
                    <img src = "logo-png.png"/>
                  </div>
                  <h2>Fahim Faisal<br/><span>Web Developer</span></h2>
                </div>
                <div class="contactInfo">
                  <h3 class="title">About Me</h3>
                  <ul>
                    <li>
                      <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                      <span class="text">+880 1711631933</span>
                    </li>
                    <li>
                      <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                      <span class="text">fahim@gmail.com</span>
                    </li>
                    <li>
                      <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                      <span class="text">Dhaka,Bangladesh</span>
                    </li>
                    <li>
                      <span class="icon"><i class="fa fa-male" aria-hidden="true"></i></span>
                      <span class="text">Male</span>
                    </li>
                  </ul>
                </div>
        
        
                <div class="contactInfo education">
                  <h3 class="title">Education</h3>
                  <ul>
                    <li>
                      <h5>2010-2013</h5>
                      <h4>MA in Computer Science</h4>
                      <h4>Rajshahi University</h4>
                    </li>
                    <li>
                      <h5>2007-2010</h5>
                      <h4>BSc in Computer Science</h4>
                      <h4>Dhaka University</h4>
                    </li>
                  </ul>
                </div>
        
        
        
              </div>
              <div class="right_Side">
                <div class="about">
                  <h2 class="title2">Experience</h2>
                  <div class="box">
                    <div class="year_company">
                      <h5>2019-Present</h5>
                      <h5>Company Name</h5>
        
                    </div>
                    <div class="text">
                      <h4>Junior Software Developer</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        
                    </div>
        
                  </div>
        
                  <div class="box">
                    <div class="year_company">
                      <h5>2019-Present</h5>
                      <h5>Company Name</h5>
        
                    </div>
                    <div class="text">
                      <h4>Frontend Developer</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    </div>
                  </div>
        
        
        
        
                <h2 class="title2">Skills</h2>
                <div class="box">
                  <div class="year_company">
                    <h5>Frontend Dev</h5>
        
        
                  </div>
                  <div class="text">
                    <h4>React, Flutter</h4>
        
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        
                  </div>
        
                </div>
        
                <div class="box">
                  <div class="year_company">
                    <h5>Backendend Dev</h5>
        
                  </div>
                  <div class="text">
                    <h4>Django, Firebase, SQL</h4>
        
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  </div>
                </div>
        
                <h2 class="title2">Achievements</h2>
                <div class="box">
                  <div class="year_company">
                    <h5>Year 2019</h5>
        
        
                  </div>
                  <div class="text">
                    <h4>App Idea Contest</h4>
                    <h5>2nd Runners Up</h5>
        
                    <p>It is a long established fact that a reader .</p>
        
                  </div>
        
                </div>
        
                <div class="box">
                  <div class="year_company">
                    <h5>Year 2019</h5>
        
        
                  </div>
                  <div class="text">
                    <h4>App Idea Contest</h4>
                    <h5>2nd Runners Up</h5>
        
                    <p>It is a long established fact that a reader .</p>
        
                  </div>
        
                </div>
        
                <div class="about interest">
                  <h2 class="title2">Activities</h2>
                  <ul>
                    <li><i class="fa fa-code" aria-hidden="true"></i> Coding</li>
                    <li><i class="fa fa-microphone" aria-hidden="true"></i>Singing</li>
                    <li><i class="fa fa-book" aria-hidden="true"></i>Reading</li>
                    <li><i class="fa fa-microphone" aria-hidden="true"></i>Dancing</li>
                  </ul>
                </div>
        
              </div>
        
          </div>
        
          </div><Form>
                        <Button className="btn btn-success " style={{ "color": "white", fontSize: "15px" }} type="submit" >
                            Submit
                        </Button>
                        <Button className="btn btn-success " style={{ "color": "white", fontSize: "15px", "marginLeft": "10px" }}  >
                            <a style={{ "color": "white" }} href="place-order">Cancel</a>
                        </Button>


                    </Form>
                </div>
            

        );


    }
}

template1.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(withRouter(template1));