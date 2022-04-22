export const parseDate = (date: Date) => {
  let day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();

  return (
    `${date.toLocaleTimeString().slice(0, -3)} ` +
    `${day >= 10 ? day : "0" + day}/` +
    `${month >= 10 ? month : "0" + month}/` +
    year
  );
};
