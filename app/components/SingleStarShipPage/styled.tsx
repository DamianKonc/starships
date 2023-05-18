import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid black;
  width: 40%;
  max-width: 500px;
  min-width: 335px;
  justify-content: space-between;
`;

export const TableHeaders = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const TableInfo = styled.p`
  font-size: 20px;
  text-align: right;
`;

export const ReturnBtn = styled.a`
  margin-top: 20px;
  text-decoration: none;
  color: darkgray;
  background-color: darkred;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
`;
