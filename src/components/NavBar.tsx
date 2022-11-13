import { Dispatch, SetStateAction } from 'react';
import AuthorCard from './AuthorCard';
import { Durations } from '../data';
import DurationList from './DurationList';

const NavBar = ({
  selectedDuration,
  setDuration,
}: {
  selectedDuration: Durations;
  setDuration: Dispatch<SetStateAction<Durations>>;
}) => {
  return (
    <div>
      <AuthorCard />
      <DurationList
        selectedDuration={selectedDuration}
        setDuration={setDuration}
      />
    </div>
  );
};

export default NavBar;
