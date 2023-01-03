import CardComponent from "./CardComponent.js";
import NoResultsComponent from "./NoResultsComponent.js";
import { Link } from "react-router-dom";


const CardContainerComponent = ({filteredData})=>{
    return (!filteredData.length?  <NoResultsComponent/> : filteredData.map((teamMembers)=>(
        <Link to={`/teammember/${teamMembers.login}`}>
        <CardComponent teamMembers={teamMembers} key={teamMembers.id}/>
        </Link>
    )));
};

export default CardContainerComponent;