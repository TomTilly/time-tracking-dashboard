import NavBar from '@components/NavBar';
import Grid from '@components/Grid';
import ActivityCard from '@components/ActivityCard';
import { useState } from 'react';
import testAccount, { Durations } from './data';

const { activities, user } = testAccount;

function App() {
  const [duration, setDuration] = useState<Durations>(Durations.weekly);
  return (
    <main className="mt-32 px-4 flex">
      <NavBar
        setDuration={setDuration}
        selectedDuration={duration}
        user={user}
      />
      <Grid>
        {activities.map((activity) => (
          <ActivityCard
            selectedDuration={duration}
            activity={activity}
            key={activity.title}
          />
        ))}
      </Grid>
    </main>
  );
}

export default App;
