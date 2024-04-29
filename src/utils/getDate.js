// get date

export const getDate = () => {
  let date = new Date();
  let currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getUTCDate();
  return currentDate;
};
