"use client";

import DropDown from "../DropDown/DropDown";
import { useState, useEffect } from "react";
import { Film, StarShip } from "@/types";
import SingleShipListElement from "../SingleShipListElement/SingleShipListElement";
import {
  StyledUl,
  StyledInputContainer,
  StyledWInput,
  ClearBtn,
  Spinner,
} from "./styled";

export default function StarShipsBody({ films }: { films: Film[] }) {
  const [pickedMovie, setPickedMovie] = useState<
    Film | { title: "All"; starships: [] }
  >({ title: "All", starships: [] });
  const [filteredStarships, setFilteredStarships] = useState<StarShip[] | []>(
    []
  );
  const [starships, setStarships] = useState<StarShip[] | []>([]);

  const [inputText, setInputText] = useState("");
  const [filteredShipsByInput, setFilteredShipsByInput] = useState<
    [] | StarShip[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      let allStarships: any[] = [];
      let nextUrl = "https://swapi.dev/api/starships/";

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        allStarships = [...allStarships, ...data.results];
        nextUrl = data.next;
      }

      setStarships(allStarships);
      setLoading(false);
    };

    fetchStarships();
  }, []);

  const filteringShips = () => {
    pickedMovie.starships &&
      pickedMovie.starships.forEach((singlestarship) => {
        const filteredShip = starships.filter(
          (ship) => ship.url === singlestarship
        )[0];
        if (filteredShip) {
          setFilteredStarships((prevState) => [...prevState, filteredShip]);
        }
      });
  };

  useEffect(() => {
    const filteredStarships = starships.filter((ship) =>
      ship.name.toLowerCase().includes(inputText.toLowerCase())
    );
    if (filteredStarships) {
      setFilteredShipsByInput([]);
      setFilteredShipsByInput((prev: [] | StarShip[]) => [
        ...prev,
        ...filteredStarships,
      ]);
    }
  }, [inputText]);

  useEffect(() => {
    setFilteredStarships([]);
    filteringShips();
  }, [pickedMovie]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleClearInput = () => {
    setInputText("");
  };

  return (
    <div>
      <DropDown
        filmsArray={films}
        pickedMovie={pickedMovie}
        setPickedMovie={setPickedMovie}
      />
      <StyledInputContainer>
        <p>Search Ship: </p>
        <StyledWInput value={inputText} onChange={handleInput} />
        <ClearBtn onClick={handleClearInput}> Clear input </ClearBtn>
      </StyledInputContainer>
      {loading ? (
        <Spinner />
      ) : (
        <StyledUl>
          {inputText.length === 0 ? (
            pickedMovie.starships.length > 0 ? (
              filteredStarships.map((starShip) => {
                return (
                  <SingleShipListElement
                    key={starShip.url}
                    starShip={starShip}
                  />
                );
              })
            ) : (
              starships.map((starShip) => {
                return (
                  <SingleShipListElement
                    key={starShip.url}
                    starShip={starShip}
                  />
                );
              })
            )
          ) : filteredShipsByInput.length > 0 ? (
            filteredShipsByInput.map((starShip) => {
              return (
                <SingleShipListElement key={starShip.url} starShip={starShip} />
              );
            })
          ) : (
            <div>Theres no space ships with that name.</div>
          )}
        </StyledUl>
      )}
    </div>
  );
}
