const USERNAMES = ['Bella', 'Sam', 'Rocky', 'Lucky', 'Oscar', 'Pepper', 'Harley'];

export const getRandomName = () => {
  const prefix = USERNAMES[Math.floor(Math.random() * USERNAMES.length)];
  const number = Math.floor(Math.random() * 1000000);
  return `${prefix}_${number}`;
}
