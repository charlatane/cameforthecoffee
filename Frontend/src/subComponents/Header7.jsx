import React, { useState, useEffect, Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../components/login/LoginActions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Header7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acctype: ""
        };
    }

    fetchData() {
        let usertoken = localStorage.getItem("token");
        fetch(process.env.REACT_APP_API + 'account/type',
            {
                headers: {
                    'Authorization': 'Bearer ' + usertoken
                }
            }
        )
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    acctype: data
                });
                console.log(data);
                
            });
    }


    componentDidMount() {
        this.fetchData();       
    }


    onLogout = () => {
      this.props.logout();
    };

  render() {
      const { user } = this.props.auth;
      const { acctype } = this.state;
      console.log(acctype);
      if(acctype=="consumer"){
        return (<header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top hnav">
                <a class="navbar-brand"><b>CVit</b></a>
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="logged-in-home" style={{"fontSize":"16px"}}>Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="not-received" style={{"fontSize":"16px"}}>Create CV</a>
                    </li>
        
                    <li class="nav-item ">
                      <a class="nav-link" href="place-order" style={{"fontSize":"16px"}}>Saved works</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="consumer-account" style={{"fontSize":"16px"}}>My account</a>
                    </li>
        
                  </ul>
                 
                  </div>
                
                  <form class="form-inline mt-2 mt-md-0 ml-auto">
                  <ul class="navbar-nav">
        
                    <li class="nav-item">
                      <a class="nav-link" href="About"><u>About Us</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Services"><u>Services</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Contacts"><u>Contact Us</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" style={{"marginLeft":"30px", "marginRight":"10px"}}>
                        <span style={{ "paddingRight": "20px", "color": "white", "fontSize":"16px" }}>User : <b>{user.username}</b></span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={this.onLogout} style={{"marginRight":"15px", "color":"white"}}
                      ><b>Log Out</b></a>
                    </li>
    
                  </ul>
                    
                  </form>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
            </header>
            
        
            );
      }
      else{
        return (<header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top hnav">
                <a class="navbar-brand"><b>BillYourWaste</b></a>
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="logged-in-home" style={{"fontSize":"16px"}}>Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="not-collected" style={{"fontSize":"16px"}}>Dashboard</a>
                    </li>
        
                    <li class="nav-item">
                      <a class="nav-link" href="ask-category" style={{"fontSize":"16px"}}>Take service</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="merchant-account" style={{"fontSize":"16px"}}>My account</a>
                    </li>
        
                  </ul>
                 
                  </div>
                
                  <form class="form-inline mt-2 mt-md-0 ml-auto">
                  <ul class="navbar-nav">
        
                    <li class="nav-item">
                      <a class="nav-link" href="About"><u>About Us</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Services"><u>Services</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Contacts"><u>Contact Us</u></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" style={{"marginLeft":"30px", "marginRight":"10px"}}>
                        <span style={{ "paddingRight": "20px", "color": "white", "fontSize":"16px" }}>User : <b>{user.username}</b></span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" onClick={this.onLogout} style={{"marginRight":"15px", "color":"white"}}
                      ><b>Log Out</b></a>
                    </li>
    
                  </ul>
                    
                  </form>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
            </header>
            
        
            );
      }
    
  }
}

Header7.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(Header7));
