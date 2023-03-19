import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import dotenv from 'dotenv'
import "react-toastify/dist/ReactToastify.css"

dotenv.config();

ReactDom.render(<App/>,document.getElementById("root"));