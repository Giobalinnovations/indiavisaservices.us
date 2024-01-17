export const minDate = daysToAdd => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);
  return futureDate;
};
export const minDateWithDate = (daysToAdd, date) => {
  const today = new Date(date);
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + daysToAdd);
  return futureDate;
};
