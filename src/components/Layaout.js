import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">    Movies</NavLink>
        {/* <NavLink>movieId</NavLink>
    <NavLink>cast</NavLink>
    <NavLink>reviews</NavLink> */}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
