import styled from "styled-components";

export const StyledListElement = styled.li`
  width: 50%;
  min-width: 300px;
  margin-bottom: 20px;
`;

export const StyledLink = styled.a`
  display: block;
  color: black;
  font-size: 12px;
  text-decoration: none;
  background-color: darkblue;
  width: 100%;
  text-align: center;
  color: lightgray;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  border-color: red;
  border-style: solid;
  @media (min-width: 360px) {
    font-size: 15px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1366px) {
    font-size: 20px;
  }
  @media (min-width: 1920px) {
    font-size: 24px;
  }
`;
