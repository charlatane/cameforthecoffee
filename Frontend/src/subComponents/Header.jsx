import React from "react"

function Header(){
    return (<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top hnav">
        <a class="navbar-brand"><b></b></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="About"><u>About Us</u></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Services"><u>Services</u></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contacts"><u>Contact Us</u></a>
            </li>
          </ul>
          </div>
        
          <form class="form-inline mt-2 mt-md-0 ml-auto">
            
            <button class="btn" type="submit">
            <a class="nav-link hnav-btn" href="SignUp" >Sign Up</a>
            </button>

            <button class="btn" type="submit">
            <a class="nav-link hnav-btn" href="LogIn" >Log In</a>
            </button>
            
          </form>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>
    

    );
}
export default Header;