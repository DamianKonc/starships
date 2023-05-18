import Link from "next/link";
import React from "react";
import { StarShip } from "@/types";
import { StyledLink, StyledListElement } from "./styled";

export default function SingleShipListElement({
  starShip,
}: {
  starShip: StarShip;
}) {
  return (
    <StyledListElement>
      <StyledLink href={`/starships/${starShip.url.slice(31)}/`}>
        {starShip.name}
      </StyledLink>
    </StyledListElement>
  );
}
