export const parseDate = (date: Date) => {
  return date.toLocaleTimeString() + " " + date.toLocaleDateString();
};
