import NavBar from '@components/NavBar';
import Grid from '@components/Grid';
import ActivityCard from '@components/ActivityCard';
import { useState } from 'react';
import testAccount, { Durations, activityStyling } from './data';

function App() {
  const { user, activities } = testAccount;

  const [duration, setDuration] = useState<Durations>(Durations.weekly);
  return (
    <main className="py-12 px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <NavBar
          setDuration={setDuration}
          selectedDuration={duration}
          user={user}
        />
        <>
          {activities.map((activity) => {
            const { icon, accentColor } = activityStyling[activity.title];
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
