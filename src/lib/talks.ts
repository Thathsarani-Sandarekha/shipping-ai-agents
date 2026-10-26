// Talks, workshops and programs shown on the front page board ("Where I'm speaking").
// Add a new entry at the top. Leave `date` out if it is not fixed yet: the board shows "Date coming soon".
export type Talk = {
  host: string;      // who runs it, shown big on the note
  title: string;     // what it is
  detail?: string;   // one short line, for example who it is for
  date?: string;     // as you want it shown, for example "14 Nov 2026"
  link?: string;     // optional page with more details or sign-up
  upcoming: boolean;
};

export const talks: Talk[] = [
  { host: 'IEEE', title: 'Talk', upcoming: true },
  { host: 'Open University', title: 'Workshop', detail: 'Students from universities across the island, 200+ joining', upcoming: true },
  { host: 'SITC Campus', title: 'CodeZela Career Accelerator', upcoming: true },
];

// Talks given since the first one in 2018. Update the number as it grows.
export const pastTalks = { count: '70+', since: 2018 };

// The biggest past talks, shown as a row under the board.
export const highlights: { host: string; what: string }[] = [
  { host: 'KubeCon', what: 'Speaker' },
  { host: 'KCD Sri Lanka', what: 'Speaker' },
  { host: 'National University of Singapore', what: 'DevOps workshop' },
  { host: 'AAIF', what: 'Talk, and organizer' },
];

// Where people can see more talks. Leave a link empty ('') to hide it.
export const profiles: { name: string; url: string }[] = [
  { name: 'LinkedIn', url: '' },
  { name: 'Facebook', url: '' },
  { name: 'YouTube', url: '' },
];
