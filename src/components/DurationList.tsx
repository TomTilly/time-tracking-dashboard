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
    <div className="flex justify-between md:flex-col items-start p-6 sm:p-8 gap-4">
      {durationStrings.map((duration) => {
        const isSelected = duration === selectedDuration;
        return (
          <button
            className="text-pale-blue hover:text-white data-[selected=true]:text-white capitalize"
            onClick={() => {
              if (!isSelected) setDuration(duration);
            }}
            data-selected={isSelected}
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
