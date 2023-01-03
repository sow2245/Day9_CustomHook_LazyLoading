import { Link } from "react-router-dom";
import { title } from "../Common/Constants.js";

const HeadingComponent=()=>(
    <div id="title" className="title-class" tabIndex="1">
        <h2>{title}</h2>
        <Link to="/searchteammembers"><span className="searchLink">Search</span></Link>
        <Link to="/aboutus"><span className="aboutLink">About us</span></Link>
    </div>
    );


export default HeadingComponent;