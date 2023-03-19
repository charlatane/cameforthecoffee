import React from "react"

function Container(){
    return (
    <div className="container px-4 text-center">
      <div style={{backgroundColor:"#ecffe6"}}>
          <img src="logo-png.png" alt="logo" style={{width:"300px",height:"300px", marginBottom:"5px", marginTop:"10px"}}/>
          <h1 class="big-heading green-text "  style={{"marginTop":"5px", "fontFamily": "Georgia"}}>Welcome to <b>Bill<random style={{"color":"black"}}>Your</random>Waste</b>!</h1>
          <p class="lead"  style={{"paddingBottom":"10px", "fontFamily": "Copperplate", "fontSize":"28px"}}><i>No more trash talking the environment, respect is owed to creation</i></p>
      </div>
          
          <a class="btn btn-lg btn-success about-btn" href="SignUp" type="submit" style={{marginRight:"10px"}}>Sign Up</a>
          <a class="btn btn-lg btn-success about-btn" href="LogIn" style={{marginLeft:"10px"}} type="submit">Log In</a>
        </div>
    );
}
export default Container;