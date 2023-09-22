import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailWrap = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: left;
  gap: 36px;
  border-bottom: 1px solid grey;
`;

export const MovieTitle = styled.h1`
  font-size: 44px;
  font-weight: 700;
  letter-spacing: 1.2;
  margin-bottom: 24px;
`;

export const DetailTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.2;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const MovieText = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.2;
`;

export const AdditionalLink = styled(Link)`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.2;
  display: inline-block;
  color: black;
  margin: 0;
  padding: 0;
  margin-left: 52px;
  padding-left: 12px;
  &:hover,
  &:focus {
    color: tomato;
    transform: scale(1.05);
  }
  margin-bottom: 12px;
`;

export const AdditionalWrap = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid grey;
`;
