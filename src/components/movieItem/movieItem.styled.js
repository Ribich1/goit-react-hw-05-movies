import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviItemStyled = styled.li`
 
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const MovieItemLink = styled(Link)`
 font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.2;
display:inline-block;
  color: black;
  margin: 0;
  padding: 0;
  padding-left:12px;
  &:hover,
  &:focus {
    color: tomato;
    transform: scale(1.05);
  }
`;
