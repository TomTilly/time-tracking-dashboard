import { Activity, Durations } from '../data';

export default function ActivityCard({
  selectedDuration,
  activity,
}: {
  selectedDuration: Durations;
  activity: Activity;
}) {
  const { title, timeframes } = activity;
  const { current, previous } = timeframes[selectedDuration];
  return (
    <div>
      <h2>{title}</h2>
      <p>{current}</p>
      <p>Last Week - {previous}</p>
    </div>
  );
}
