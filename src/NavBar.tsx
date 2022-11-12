import { Dispatch, SetStateAction } from 'react';
import AuthorCard from './AuthorCard';
import { Durations } from './data';
import DurationList from './DurationList';

const NavBar = ({
  setDuration,
}: {
  setDuration: Dispatch<SetStateAction<Durations>>;
}) => {
  return (
    <div>
      <AuthorCard />
      <DurationList />
    </div>
  );
};

export default NavBar;
