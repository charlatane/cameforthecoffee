import React from "react";
import Header from "../subComponents/Header";
import Container from "../subComponents/Container";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home(){
    return (<div>
       <Header/>
       <Container/>
    </div>
    );
}
export default Home;