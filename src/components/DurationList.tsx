import { Dispatch, SetStateAction } from 'react';
import { Durations } from '../data';

const durationStrings = Object.values(Durations);

export default function DurationList({
  selectedDuration,
  setDuration,
}: {
  selectedDuration: Durations;
  setDuration: Dispatch<SetStateAction<Durations>>;
}) {
  return (
    <ul role="list">
      {durationStrings.map((duration) => (
        <li key={duration}>
          <button>{duration}</button>
        </li>
      ))}
    </ul>
  );
}
