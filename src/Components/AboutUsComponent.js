import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { title } from '../Common/Constants.js';
class AboutUsComponent extends  React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount(){
        console.log("About componentDidMount"); 
    };
    componentDidUpdate(){
        console.log("About componentDidUpdate"); 
    };
    componentWillUnmount(){
        console.log("About componentWillUnmount"); 
    };
    render(){
        console.log("About Render"); 
        return(
            <React.Fragment>
                <h1>About Us</h1>
                <h2>Our team name is {title}</h2>
                <Outlet/>
                <h3>Team Captain : Harshita Mangla</h3>
                <h4>Team Size : 10</h4>
                <h5>We all meet in Namaste React BootCamp</h5>
                <h5>Host for BootCamp : Akshay</h5>
            </React.Fragment>
        );      
    }
}

export default AboutUsComponent;