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
    <ul className="p-8" role="list">
      {durationStrings.map((duration) => (
        <li key={duration}>
          <button
            className="py-2 text-pale-blue hover:text-white aria-selected:text-white"
            aria-selected={duration === selectedDuration}
          >
            {duration}
          </button>
        </li>
      ))}
    </ul>
  );
}
