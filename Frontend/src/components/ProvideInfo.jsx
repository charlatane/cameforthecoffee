import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { logout } from "./login/LoginActions";
import { toast } from "react-toastify";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class ProvideInfo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            experience: "",
            gender: "",
            phone: "",
            email: "",
            education: "",
            address: "",
            path: window.location.pathname,
            skills: "",
            achievements: "",
            activities: ""
        };
    }

    // fetchData() {
    //     let usertoken = localStorage.getItem("token");
    //     fetch(process.env.REACT_APP_API + 'merchant/getCategory', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + usertoken

    //         },
    //         body: JSON.stringify({
    //             'path': this.state.path
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((result) => {
    //             this.setState({
    //                 category: result[0].CategoryName,
    //                 categoryid: result[0].CategoryID,
    //                 price: result[0].SellPrice
    //             });

    //             console.log(result);
    //         },
    //             (error) => {
    //                 toast.error("Error Occurred!", { position: "top-center" });
    //             })
    // }

    // componentDidMount() {
    //     this.fetchData();
    // }

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

        fetch(process.env.REACT_APP_API + 'provideinfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + usertoken

            },
            body: JSON.stringify({
                'name': event.target.name.value,
                'username' : this.props.auth,
                'gender': event.target.gender.value,
                'phone': event.target.phone.value,
                'email': event.target.email.value,
                'education': event.target.education.value,
                'experience': event.target.experience.value,
                'address': event.target.education.value,
                'skills': event.target.skills.value,
                'achievements': event.target.achievements.value,
                'activities': event.target.activities.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                if (result) {
                    this.props.history.push('/selectTemplate/'+result);    
                    // toast.info("We will pick the wastes tomorrow between 10 am to 12 pm from your address. We will contact through your contact number or email address if necessary. You will receive your dues at the end of this month through the provided payment method for your account (if you want you can update it anytime). Contact us if you have any query. Thank you for being with us!", 
                    // { position: "top-center", autoClose:false });               
                }
                else toast.error("Error Occurred! Try again!", { position: "top-center"});
                
            },
                (error) => {
                    toast.error("Error Occurred! Try again!", { position: "top-center" });
                })
    }

    render() {
        const { user } = this.props.auth;
        const { category } = this.state;
        const { price } = this.state;
        
        return (
            <div class="center-block " style={{ "color": "white", "maxWidth": "1000px", "padding": "10px", "marginTop": "30px", backgroundColor: "#2D394D" }}>
                <div class="mt-4 mb-4 mx-auto rounded pt-4 " style={{ backgroundColor: "#2D394D" }} >
                    <div class="text-center col log-in-div" style={{ "color":"white", backgroundColor: "#2D394D", "marginTop": "0px" }} >
                        <img
                            src="logo-png.png" alt="CleanBD-logo"
                            id="log-in-img" style={{ height: "100px" }} />
                        <h3 class="green-text" style={{ "color":"white"}}><b>Create Your CV the Easiest Way!</b></h3>
                        <h4 ><b>Enter Your Information</b></h4>
                        <hr />
                    </div>


                    <Form class="log-in-form" onSubmit={this.handleSubmit}>

                    <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type="text"
                                name="gender"
                                placeholder="Enter Your Gender"
                                value={this.state.gender}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Enter Your Mobile Number"
                                value={this.state.phone}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Enter Your Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="address"
                                rows={5}
                                placeholder="Enter Your Address"
                                value={this.state.address}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="education">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="education"
                                rows={5}
                                placeholder="Enter Your Educational Qualifications"
                                value={this.state.education}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="experience">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="experience"
                                rows={5}
                                placeholder="Write About Your Experience"
                                value={this.state.experience}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="skills"
                                rows={5}
                                placeholder="Write About Your Skills"
                                value={this.state.skills}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="achievements">
                            <Form.Label>Achievements</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="achievements"
                                rows={5}
                                placeholder="Write About Your Achievements"
                                value={this.state.achievements}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="activities">
                            <Form.Label>Activities</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="activities"
                                rows={5}
                                placeholder="Write About Your Activities"
                                value={this.state.activities}
                                onChange={this.onChange}
                                required
                            />
                        </Form.Group>

                        

                        <Button className="btn btn-success " style={{ backgroundColor: "white", "color": "#2D394D", fontSize: "15px" }} type="submit" >
                            Submit
                        </Button>

                    </Form>
                </div>
            </div>
        );

    }
}

ProvideInfo.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(withRouter(ProvideInfo));