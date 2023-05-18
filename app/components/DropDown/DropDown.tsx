"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { Film } from "@/types";
import { StyledButton, DropDownWrapper, ListWrapper, ListItem } from "./styled";

export default function DropDown({
  filmsArray,
  pickedMovie,
  setPickedMovie,
}: {
  filmsArray: Film[];
  pickedMovie: Film | { title: string; starships: [] };
  setPickedMovie: Dispatch<
    SetStateAction<Film | { title: "All"; starships: [] }>
  >;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handePickedMovie = (
    data: SetStateAction<Film | { title: "All"; starships: [] }>
  ) => {
    setPickedMovie(data);
    handleOpen();
  };
  return (
    <DropDownWrapper>
      <StyledButton onClick={handleOpen}>{pickedMovie.title}</StyledButton>
      <ListWrapper shouldBeOpen={isOpen}>
        <ListItem
          onClick={() => handePickedMovie({ title: "All", starships: [] })}
        >
          <p>All</p>
        </ListItem>
        {filmsArray.map((film) => (
          <ListItem key={film.title} onClick={() => handePickedMovie(film)}>
            <p>{film.title}</p>
          </ListItem>
        ))}
      </ListWrapper>
    </DropDownWrapper>
  );
}
