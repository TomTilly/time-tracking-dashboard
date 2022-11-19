import { Dispatch, SetStateAction } from 'react';
import { Durations } from '@/data';

const durationStrings = Object.values(Durations);

export default function DurationList({
  selectedDuration,
  setDuration,
}: {
  selectedDuration: Durations;
  setDuration: Dispatch<SetStateAction<Durations>>;
}) {
  return (
    <div className="flex flex-col items-start p-8 gap-4">
      {durationStrings.map((duration) => {
        const isSelected = duration === selectedDuration;
        return (
          <button
            className="text-pale-blue hover:text-white aria-selected:text-white capitalize"
            aria-selected={isSelected}
            onClick={() => {
              if (!isSelected) setDuration(duration);
            }}
            key={duration}
            type="button"
          >
            {duration}
          </button>
        );
      })}
    </div>
  );
}
