import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledWInput = styled.input`
  font-size: 20px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`;

export const ClearBtn = styled.button`
  font-size: 15px;
  padding: 5px 10px;
  background-color: darkred;
  color: lightcoral;
`;
