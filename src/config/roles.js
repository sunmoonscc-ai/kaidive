export const ADMIN_EMAILS = [
  'hdcc6th@gmail.com',
  'sunmoon.scc@gmail.com',
  'kaidiveshop@gmail.com'
];

export const isAdmin = (email) => {
  return email && ADMIN_EMAILS.includes(email.toLowerCase());
};
