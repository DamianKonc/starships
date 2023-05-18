"use client"

import Link from "next/link"
import DropDown from "../DropDown/DropDown"
import { useState, useEffect } from "react"
import { Film, StarShip } from "@/types"


export default  function StarShipsBody({films}:{films: Film[]}) {
    const [pickedMovie, setPickedMovie] = useState<Film | {title: "All", starships: []}>({title: "All", starships:[]});
    const [filteredStarships, setFilteredStarships] = useState<StarShip[] | []>([])
    const [starships, setStarships] = useState<StarShip[] | []>([]);

    console.log(starships)


    useEffect(() => {
        const fetchStarships = async () => {
          let allStarships: any[] = [];
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

     return (
    <div>
    <DropDown filmsArray={films} pickedMovie={pickedMovie} setPickedMovie={setPickedMovie}/>
    <br/>
    {pickedMovie.starships.length>0? filteredStarships.map(starShip=>{
        
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
