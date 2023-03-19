import React, { useState, useEffect, Component } from 'react';
import Header6 from "../subComponents/Header6";
import Container2 from "../subComponents/Container2";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../components/login/LoginActions";

function LoggedHome(){
    return (<div>
       <Header6/>
       <Container2/>
    </div>
    );
}
LoggedHome.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(withRouter(LoggedHome));