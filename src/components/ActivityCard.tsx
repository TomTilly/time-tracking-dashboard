import { Activity, Durations } from '@/data';
import iconEllipsis from '@assets/icon-ellipsis.svg';

export default function ActivityCard({
  selectedDuration,
  activity,
  icon,
  accentColor,
}: {
  selectedDuration: Durations;
  activity: Activity;
  icon: string;
  accentColor: string;
}) {
  const { title, timeframes } = activity;
  const { current, previous } = timeframes[selectedDuration];
  return (
    <div className="rounded-xl flex flex-col overflow-hidden">
      {/* Need to include this extra div due to a border-radius background bleed bug:
      https://css-tricks.com/almanac/properties/b/border-radius/#aa-background-color-bleed
      Suggested solution of "background-clip: padding-box" does not work
       */}
      <div
        className={`${accentColor} h-14 bg-no-repeat bg-[length:75px] bg-[top_-.5rem_right_1rem]`}
        style={{ backgroundImage: `url('${icon}')` }}
      />
      <div className="p-6 bg-dark-blue grow rounded-t-xl -mt-4 space-y-8">
        <div className="flex justify-between">
          <h2 className="font-medium text-lg">{title}</h2>
          <button aria-label="View options">
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
        <div className="flex md:flex-col justify-between items-center md:items-start gap-2">
          <p className="text-4xl lg:text-6xl font-light">{current}hrs</p>
          <p className="text-pale-blue text-base text-right">
            Last Week - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
