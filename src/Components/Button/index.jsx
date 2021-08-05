import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: ${({ color }) => (color ? color :"#000000")};
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: ${({ bcolor }) => (bcolor ? bcolor :"#FFFFFF")};
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #696969;
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size,color,bcolor,clickBtn} = props;

  return (
    <ButtonWrapper size={size} color={color} bcolor={bcolor} className={props.className} onClick={clickBtn}>
      {props.children}
    </ButtonWrapper>
  );
}
