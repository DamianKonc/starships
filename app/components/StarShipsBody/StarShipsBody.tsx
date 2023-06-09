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
  Wrapper,
  Text,
} from "./styled";
import BackgroundVideoComponent from "../BackgroundVideoComponent/BackgroundVideoComponent";

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
    console.log(filteredStarships);
  }, [filteredStarships]);

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
    let filteredStarshipsByInput: StarShip[];
    filteredStarships.length > 0
      ? (filteredStarshipsByInput = filteredStarships.filter((ship) =>
          ship.name.toLowerCase().includes(inputText.toLowerCase())
        ))
      : (filteredStarshipsByInput = starships.filter((ship) =>
          ship.name.toLowerCase().includes(inputText.toLowerCase())
        ));
    if (filteredStarshipsByInput) {
      setFilteredShipsByInput([]);
      setFilteredShipsByInput((prev: [] | StarShip[]) => [
        ...prev,
        ...filteredStarshipsByInput,
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
    <>
      <Wrapper>
        <DropDown
          filmsArray={films}
          pickedMovie={pickedMovie}
          setPickedMovie={setPickedMovie}
        />
        <StyledInputContainer>
          <Text>Search Ship: </Text>
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
                  <SingleShipListElement
                    key={starShip.url}
                    starShip={starShip}
                  />
                );
              })
            ) : (
              <Text>Theres no space ships with that name.</Text>
            )}
          </StyledUl>
        )}
      </Wrapper>
      <BackgroundVideoComponent />
    </>
  );
}
