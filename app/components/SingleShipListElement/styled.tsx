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
  font-weight: bold;
  text-decoration: none;
  background: linear-gradient(135deg, rgb(92, 144, 228), rgb(238, 66, 36));
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  border-color: red blue blue red;
  border-style: solid;
  transition: all 0.2s;
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
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: -5px 24px 61px 3px rgba(66, 68, 90, 1);
    -moz-box-shadow: -5px 24px 61px 3px rgba(66, 68, 90, 1);
    box-shadow: -5px 24px 61px 3px rgba(66, 68, 90, 1);
    border-color: blue red red blue;
  }
`;
