import { Activity, Durations } from '@/data';

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
    <div className="bg-blue rounded-xl pt-12 flex flex-col overflow-hidden">
      <div className="p-4 bg-dark-blue grow rounded-xl bg-clip-padding">
        <h2>{title}</h2>
        <p>{current}hrs</p>
        <p>Last Week - {previous}hrs</p>
      </div>
    </div>
  );
}
