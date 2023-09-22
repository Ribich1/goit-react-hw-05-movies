import styled from 'styled-components';

export const HeaderWrap = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  height: 40px;
  padding: 10px 30px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  a {
    text-decoration: none;
    font-size: 18px;
  }
  a.active {
    color: tomato;
    font-weight: 700;
    font-size: 22px;
  }
`;

export const LayoutStyled = styled.div`
  width: 1272px;
  padding: 0 12px;
  margin: 0 auto;
`;
