import { useState,useEffect } from "react";
import axios from "axios";



function GetCountries() {

  const [allCountries, setCountries] = useState([]);

  useEffect(()=> {
  const getNames = async () => {
    try{
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log(response.data);

      setCountries(response.data)
    }catch(error){
      console.error("Could not retrieve countries: ", error);
    }
  };

 getNames();
},[]);

    return (
      <>
        <h1 className="text-blue-400">Get Countries</h1>
        {allCountries.map((country, index) => (
  <div key={index}>
    <h2>{country.name.common}</h2>
  </div>
))}







      </>
    );
  }
  
  export default GetCountries;
  