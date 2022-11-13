import NavBar from '@components/NavBar';
import Grid from '@components/Grid';
import ActivityCard from '@components/ActivityCard';
import { useState } from 'react';
import activities, { Durations } from './data';

function App() {
  const [duration, setDuration] = useState<Durations>(Durations.weekly);
  return (
    <main className="mt-32 px-4 flex">
      <NavBar setDuration={setDuration} selectedDuration={duration} />
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
