import { useState,useEffect } from "react";
import data from "../Common/data.json"
import SearchComponent from "./SearchComponent";
import CardContainerComponent from "./CardContainerComponent";

const SearchTeamMembersComponent=()=>{
    const [listOfTeamMembers,setListOfTeamMembers]=useState([]);
    const [filteredData,setFilteredData]=useState([]);
    const [isSearched,setIsSearched]=useState(false);

    useEffect(()=>{
        getTeamMembersDataFromGit();
    },[]);

    async function getTeamMembersDataFromGit() {
        const TeamMemberArr = [];
        for (teamMem of data) {
          const teamData = await fetch(
            `https://api.github.com/users/${teamMem.gitlogin}`
          );
          const teamJsonData = await teamData.json();
          TeamMemberArr.push(teamJsonData);
        }
        setListOfTeamMembers(TeamMemberArr);
    };

    return(
    <div className="card-container">
        <SearchComponent listOfTeamMembers={listOfTeamMembers} setFilteredData={setFilteredData} setIsSearched={setIsSearched}/>
        <CardContainerComponent filteredData={isSearched ? (filteredData.length !=0 ? filteredData : <NoResultsComponent/>): listOfTeamMembers}/>
    </div>);
};

export default SearchTeamMembersComponent;