import styled from "styled-components";

export const UiButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s;
  
  &::after {
    content: "";
    position: absolute;
    top: 90%;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #000;
    transform: translate(-50%);
    transition: width 0.3s ease-in-out;
  }
  
  &:hover::after {
    width: 100%;
  }
`