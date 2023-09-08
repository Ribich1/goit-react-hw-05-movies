import { Link } from 'react-router-dom';

export const GoBackBtn = ({ path}) => {
  return <Link to={path}>Go back</Link>;
};
