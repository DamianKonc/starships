import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;

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

export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
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
  color: lightgray;
`;

export const Spinner = styled.div`
  margin: auto;
  border: 16px solid darkblue;
  border-top: 16px darkred solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
