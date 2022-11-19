import NavBar from '@components/NavBar';
import Grid from '@components/Grid';
import ActivityCard from '@components/ActivityCard';
import { useState } from 'react';
import testAccount, { Durations, ActivityType } from './data';

const { activities, user } = testAccount;

function getActivityStyling(
  activityTitle: ActivityType | '' = ''
): ActivityStyling {
  switch (activityTitle) {
    case ActivityType.work:
      return {
        icon: "bg-[url('/icon-work.svg')]",
        accentColor: 'bg-orange',
      };
    case ActivityType.play:
      return {
        icon: "bg-[url('/icon-play.svg')]",
        accentColor: 'bg-blue',
      };
    default:
      return {
        icon: "bg-[url('/icon-study.svg')]",
        accentColor: 'bg-orange',
      };
  }
}

function App() {
  const [duration, setDuration] = useState<Durations>(Durations.weekly);
  return (
    <main className="mt-32 px-4">
      <div className="md:grid grid-cols-4 gap-8">
        <NavBar
          setDuration={setDuration}
          selectedDuration={duration}
          user={user}
        />
        <>
          {activities.map((activity) => {
            const { icon, accentColor } = getActivityStyling(activity.title);
            return (
              <ActivityCard
                selectedDuration={duration}
                activity={activity}
                key={activity.title}
                accentColor={accentColor}
                icon={icon}
              />
            );
          })}
        </>
      </div>
    </main>
  );
}

export default App;
