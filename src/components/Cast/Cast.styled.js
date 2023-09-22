import styled from 'styled-components';

export const CardCast = styled.ul`
  padding: 24px 0;
  display: flex;
  justify-content: left;
  gap: 36px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CardItem = styled.li`
  flex-basis: calc((100% - 6 * 24px) / 7);
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 3px 3px 10px black;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  & img {
    width: 100%;
    height: 220px;
  }
`;

export const CastWrap = styled.div`
  position: relative;
`;
