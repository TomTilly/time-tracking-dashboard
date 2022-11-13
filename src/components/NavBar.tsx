import { Dispatch, SetStateAction } from 'react';
import AuthorCard from './AuthorCard';
import { Durations, User } from '@/data';
import DurationList from './DurationList';

const NavBar = ({
  selectedDuration,
  setDuration,
  user,
}: {
  selectedDuration: Durations;
  setDuration: Dispatch<SetStateAction<Durations>>;
  user: User;
}) => {
  return (
    <div className="bg-dark-blue rounded-xl overflow-hidden flex flex-col">
      <AuthorCard user={user} />
      <DurationList
        selectedDuration={selectedDuration}
        setDuration={setDuration}
      />
    </div>
  );
};

export default NavBar;
