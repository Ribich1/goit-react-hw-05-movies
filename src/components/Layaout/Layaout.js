import { NavLink, Outlet } from 'react-router-dom';
import {HeaderWrap} from './Layaout.styled';

export const Layout = () => {
  return (
    <div>
      <HeaderWrap>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">    Movies</NavLink>
        {/* <NavLink>movieId</NavLink>
    <NavLink>cast</NavLink>
    <NavLink>reviews</NavLink> */}
      </HeaderWrap>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
