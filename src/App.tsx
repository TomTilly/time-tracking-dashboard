import NavBar from './NavBar';
import Grid from './Grid';
import ActivityCard from './ActivityCard';
import { useState } from 'react';
import activities, { Durations } from './data';

function App() {
  const [duration, setDuration] = useState<Durations>(Durations.weekly);
  return (
    <main>
      <NavBar setDuration={setDuration} />
      <Grid>
        {activities.map((activity) => (
          <ActivityCard duration={duration} activity={activity} />
        ))}
      </Grid>
    </main>
  );
}

export default App;
