"use client"

import Link from "next/link"
import DropDown from "../DropDown/DropDown"
import { useState, useEffect } from "react"


export default  function StarShipsBody({films}) {
    const [ pickedMovie, setPickedMovie] = useState({title: "All"});
    const [filteredStarships, setFilteredStarships] = useState([])
    const [starships, setStarships] = useState([]);


    useEffect(() => {
        const fetchStarships = async () => {
          let allStarships = [];
          let nextUrl = 'https://swapi.dev/api/starships/';
    
          while (nextUrl) {
            const response = await fetch(nextUrl);
            const data = await response.json();
    
            allStarships = [...allStarships, ...data.results];
            nextUrl = data.next;
          }
    
          setStarships(allStarships);
        };
    
        fetchStarships();
      }, []);

    const filteringShips = () => {
        pickedMovie.starships &&
          pickedMovie.starships.forEach(singlestarship => {
            const filteredShip = starships.filter(ship => ship.url === singlestarship)[0];
            if (filteredShip) {
              setFilteredStarships(prevState => [...prevState, filteredShip]);
            }
          });
      };

      useEffect(() => {
        setFilteredStarships([]);
        filteringShips();
      }, [pickedMovie]);
      
      useEffect(() => {
        console.log(filteredStarships);
      }, [filteredStarships]);

     return (
    <div>
    <DropDown filmsArray={films} pickedMovie={pickedMovie} setPickedMovie={setPickedMovie}/>
    <br/>
    {pickedMovie.starships? filteredStarships.map(starShip=>{
        
        return(
            <p key={starShip.url}>
                <Link href={`/starships/${starShip.url.slice(31)}/`}>{starShip.name}</Link>
            </p>
        )
    }) : starships.map(starShip=>{
        
        return(
            <p key={starShip.url}>
                <Link href={`/starships/${starShip.url.slice(31)}/`}>{starShip.name}</Link>
            </p>
        )
    })}
    </div>
  )
}
