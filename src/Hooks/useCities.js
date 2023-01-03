import { useState,useEffect } from "react";

const useCities = (stateName) =>{
    const[cities,setCities] = useState([]);

    useEffect(()=>{
       fetchCities();

       async function fetchCities(){
        const citiesData = await fetch("https://sow2245.github.io/data/India_CitiesAndStates.json");
        const citiesJsonData = await citiesData.json();
        setCities(citiesJsonData[stateName]);
        //To push list of array as one element using ,
        //setCities(arr => [...arr, citiesJsonData[stateName].join(",")]);
        }
    },[stateName]);
    return cities;
};

export default useCities;