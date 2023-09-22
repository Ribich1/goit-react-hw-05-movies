import { NavLink, Outlet } from 'react-router-dom';
import { HeaderWrap, LayoutStyled } from './Layaout.styled';

export const Layout = () => {
  return (
    <div>
      <LayoutStyled>
        <HeaderWrap>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies"> Movies</NavLink>
        </HeaderWrap>
      </LayoutStyled>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
