export default function DateCorrection(date) {
  const newDate = new Date(date);

  newDate.setHours(newDate.getHours() - 3);

  return newDate;
}
