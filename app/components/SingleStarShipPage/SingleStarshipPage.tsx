"use client";
import React from "react";
import { StarShip } from "@/types";
import {
  Container,
  TableRow,
  TableHeaders,
  TableInfo,
  ReturnBtn,
} from "./styled";

export default function SingleStarshipPage({
  starShip,
}: {
  starShip: StarShip;
}) {
  return (
    <Container>
      <TableRow>
        <TableHeaders>Name:</TableHeaders>
        <TableInfo>{starShip.name}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> model:</TableHeaders>
        <TableInfo> {starShip.model}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>manufacturer:</TableHeaders>
        <TableInfo>{starShip.manufacturer}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> cost in credits:</TableHeaders>
        <TableInfo> {starShip.cost_in_credits}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> length:</TableHeaders>
        <TableInfo>{starShip.length}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> max atmosphering speed:</TableHeaders>
        <TableInfo>{starShip.max_atmosphering_speed}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> max atmosphering speed:</TableHeaders>
        <TableInfo>{starShip.max_atmosphering_speed}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>crew:</TableHeaders>
        <TableInfo> {starShip.crew}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders> passengers:</TableHeaders>
        <TableInfo>{starShip.passengers}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>cargo capacity:</TableHeaders>
        <TableInfo>{starShip.cargo_capacity}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>consumables:</TableHeaders>
        <TableInfo>{starShip.consumables}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>hyperdrive rating:</TableHeaders>
        <TableInfo>{starShip.hyperdrive_rating}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>MGLT:</TableHeaders>
        <TableInfo>{starShip.MGLT}</TableInfo>
      </TableRow>
      <TableRow>
        <TableHeaders>starship class:</TableHeaders>
        <TableInfo>{starShip.starship_class}</TableInfo>
      </TableRow>
      <ReturnBtn href="/">Go Back</ReturnBtn>
    </Container>
  );
}
