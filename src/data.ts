export enum Durations {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly',
}

export enum ActivityCategories {
  work = 'Work',
  play = 'Play',
  study = 'Study',
  exercise = 'Exercise',
  social = 'Social',
  selfCare = 'Self Care',
}

export type Activity = {
  title: ActivityCategories;
  timeframes: {
    [Duration in Durations]: {
      current: number;
      previous: number;
    };
  };
};

const activities: Activity[] = [
  {
    title: ActivityCategories.work,
    timeframes: {
      [Durations.daily]: {
        current: 5,
        previous: 7,
      },
      [Durations.weekly]: {
        current: 32,
        previous: 36,
      },
      [Durations.monthly]: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: ActivityCategories.play,
    timeframes: {
      [Durations.daily]: {
        current: 1,
        previous: 2,
      },
      [Durations.weekly]: {
        current: 10,
        previous: 8,
      },
      [Durations.monthly]: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: ActivityCategories.study,
    timeframes: {
      [Durations.daily]: {
        current: 0,
        previous: 1,
      },
      [Durations.weekly]: {
        current: 4,
        previous: 7,
      },
      [Durations.monthly]: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: ActivityCategories.exercise,
    timeframes: {
      [Durations.daily]: {
        current: 1,
        previous: 1,
      },
      [Durations.weekly]: {
        current: 4,
        previous: 5,
      },
      [Durations.monthly]: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: ActivityCategories.social,
    timeframes: {
      [Durations.daily]: {
        current: 1,
        previous: 3,
      },
      [Durations.weekly]: {
        current: 5,
        previous: 10,
      },
      [Durations.monthly]: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: ActivityCategories.selfCare,
    timeframes: {
      [Durations.daily]: {
        current: 0,
        previous: 1,
      },
      [Durations.weekly]: {
        current: 2,
        previous: 2,
      },
      [Durations.monthly]: {
        current: 7,
        previous: 11,
      },
    },
  },
];

export default activities;
