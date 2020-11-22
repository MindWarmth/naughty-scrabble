const USERNAMES = ['Bella', 'Sam', 'Rocky', 'Lucky', 'Oscar', 'Pepper', 'Harley'];
const LOCALSTORAGE_KEY = 'username';

export const getUsername = () => {
  let username = localStorage.getItem(LOCALSTORAGE_KEY);
  if (username) {
    return username;
  }

  const prefix = USERNAMES[Math.floor(Math.random() * USERNAMES.length)];
  const number = Math.floor(Math.random() * 100);
  username = `${prefix}_${number}`;

  localStorage.setItem(LOCALSTORAGE_KEY, username);

  return username;
}
