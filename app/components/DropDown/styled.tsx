import styled from "styled-components";

interface ListWrapperProps {
  shouldBeOpen: boolean;
}

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
`;

export const StyledButton = styled.button`
  width: 20%;
  min-width: 160px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: darkred;
  color: lightgray;
  font-size: 12px;
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

export const ListWrapper = styled.ul<ListWrapperProps>`
  position: absolute;
  display: flex;
  transition: all 0.5s;
  flex-direction: column;
  gap: 10px;
  visibility: ${(props) => (props.shouldBeOpen ? "visible " : "hidden")};
  top: ${(props) => (props.shouldBeOpen ? "60px " : "-400px")};
  background-color: darkred;
  padding: 20px 10px;
  z-index: 10;
  z-index: -1;
`;

export const ListItem = styled.li`
  background-color: darkgray;
  text-align: center;
  padding: 5px 20px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  font-size: 10px;
  @media (min-width: 360px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1366px) {
    font-size: 18px;
  }
  @media (min-width: 1920px) {
    font-size: 22px;
  }
`;
