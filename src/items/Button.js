import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = ({ ...props }) => (
  <svg
    viewBox="0 0 266 67"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.905 4.052L259.717.044a6 6 0 0 1 6.08 6.432l-3.979 54.957A6 6 0 0 1 255.834 67H6a6 6 0 0 1-6-6V10.052a6 6 0 0 1 5.905-6z"
    />
  </svg>
);

const Element = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 5;
  margin: ${({ margin }) => margin || ""};
  line-height: 2.8em;
  display: block;
  width: 100%;
  text-align: center;
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    fill: ${({ theme, bg }) => theme.colors[bg ? bg : "blue"]};
  }
  span {
    font-weight: bold;
    color: ${({ theme, color }) => theme.colors[color ? color : "white"]};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    display: inline-block;
    width: auto;
    padding: 0 2.8em;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Button = ({ text, ...props }) => (
  <Element as={props.to ? Link : props.href ? "a" : "button"} {...props}>
    <Background />
    <span>{text}</span>
  </Element>
);

const SubmitButton = styled(Button)`
  font-size: 1.5625em;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1em;
  }
`;

export { Button, SubmitButton };
