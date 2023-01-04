import { useState } from "react";
import stateCityObj from "../Common/state_city.json";
import useCities from "../Hooks/useCities.js";

const searchTeamData=(searchText,listOfTeamMembers,setIsSearched,cityName)=>{
      //filtering data for multiple fields
      const setValue = (searchText != "" || searchText != null || cityName != null);
      setIsSearched(setValue);
      let copyOfData = listOfTeamMembers;
      if(searchText != "" || searchText != null){
        copyOfData = copyOfData?.filter((team) => 
                            (team.name.toLowerCase().includes(searchText.toLowerCase())));
      }
      if(cityName != null){
        copyOfData = copyOfData?.filter((team) => 
                            (team.location?.toLowerCase()?.includes(cityName.toLowerCase())));
      }
      return copyOfData;
};

const SearchComponent =({listOfTeamMembers , setFilteredData , setIsSearched})=>{
    const [searchText,setSearchText] = useState("");
    const [stateName,setStateName] = useState("Andhra Pradesh");
    const [cityName,setCityName] = useState("Kavali");
    const listOfCities = useCities(stateName);

    const settingValueForSetSearchText=(e)=>{
        setSearchText(e.target.value);
    };

    return(
    <div className="search">
            <form 
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const filteredData = searchTeamData(searchText,listOfTeamMembers,setIsSearched,cityName);
                    setFilteredData(filteredData);
                }
            }>
                <div className="search">
                <input placeholder="search" 
                       value={searchText}
                       onChange={settingValueForSetSearchText}></input>
                </div>
                
                <div className="search">
                <select value={stateName} onChange = {
                    (e)=>{setStateName(e.target.value); }
                    }>
                    {Object.keys(stateCityObj).map(state=><option key ={state}
                    value = {state}>{state}</option>)}
                </select>
                </div>

                <div className="search">
                <select id = "CitiesDropdown" value={cityName} onChange={
                    (e)=>{setCityName(e.target.value);}
                    }>
                    {listOfCities?.map(city=><option key={city}
                    value = {city}>{city}</option>)}
                </select>
                </div>

                <div className="search">
                <button>Search</button>
                </div>
            </form>
    </div>
    );
};

export default SearchComponent;