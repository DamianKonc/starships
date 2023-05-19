import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  min-height: 100vh;
  padding: 20px 0;
  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(92, 144, 228, 0.9),
    rgba(238, 66, 36, 0.9)
  );
  width: 40%;
  max-width: 500px;
  padding: 20px 30px;
  border-radius: 5px;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid black;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const TableHeaders = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  @media (min-width: 800px) {
    font-size: 25px;
  }
`;

export const TableInfo = styled.p`
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
    font-size: 23px;
    text-align: right;
  }
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
