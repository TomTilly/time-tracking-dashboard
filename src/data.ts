import jeremyImgSrc from '@assets/image-jeremy.png';

export enum Durations {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
}

export enum ActivityType {
  work = 'Work',
  play = 'Play',
  study = 'Study',
  exercise = 'Exercise',
  social = 'Social',
  selfCare = 'Self Care',
}

export type ActivityStyling = {
  accentColor: string;
  icon: string;
};

export const activityStyling: Record<ActivityType, ActivityStyling> = {
  [ActivityType.work]: {
    accentColor: 'bg-orange',
    icon: `bg-[url(url('/icon-work.svg')]`,
  },
  [ActivityType.play]: {
    icon: "bg-[url('/icon-play.svg')]",
    accentColor: 'bg-blue',
  },
  [ActivityType.study]: {
    icon: "bg-[url('/icon-study.svg')]",
    accentColor: 'bg-red',
  },
  [ActivityType.exercise]: {
    icon: "bg-[url('/icon-exercise.svg')]",
    accentColor: 'bg-green',
  },
  [ActivityType.social]: {
    icon: "bg-[url('/icon-social.svg')]",
    accentColor: 'bg-purple',
  },
  [ActivityType.selfCare]: {
    icon: "bg-[url('/icon-self-care.svg')]",
    accentColor: 'bg-yellow',
  },
};

export type Activity = {
  title: ActivityType;
  timeframes: {
    [Duration in Durations]: {
      current: number;
      previous: number;
    };
  };
};

export type User = {
  firstName: string;
  lastName: string;
  avatarSrc: string;
  id: string;
};

export type Account = {
  user: User;
  activities: Activity[];
};

const testAccount: Account = {
  user: {
    firstName: 'Jeremy',
    lastName: 'Robson',
    avatarSrc: jeremyImgSrc,
    id: '1',
  },
  activities: [
    {
      title: ActivityType.work,
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
      title: ActivityType.play,
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
      title: ActivityType.study,
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
      title: ActivityType.exercise,
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
      title: ActivityType.social,
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
      title: ActivityType.selfCare,
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
  ],
};

export default testAccount;
