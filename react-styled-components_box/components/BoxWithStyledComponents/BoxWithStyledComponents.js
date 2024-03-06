import styled, { css } from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  //Black
  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}
`;

export default function BoxWithStyledComponents() {
  return <StyledBox $isBlack></StyledBox>;
}
