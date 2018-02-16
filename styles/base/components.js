import styled from "react-emotion";
import { colors } from "../vars";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1640px;
  margin-left: auto;
  margin-right: auto;
  
  ${props => props.center && (`
    height: 100%;
    align-items: center;
    justify-content: center;
  `)}
`;

export const Button = styled.a`
  background-color: #B11E23;
  border-radius: 4px;
  padding: 15px 30px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  margin-top: 30px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 1em;
  color: ${colors.lightPrimary};
  text-decoration: none;
  
  &:hover {
    background-color: #FFF;
    color: #b11e23;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
`;
