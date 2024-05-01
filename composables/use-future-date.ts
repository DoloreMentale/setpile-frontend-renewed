export const useFutureDate = () => {
  const currentDate: Date = new Date();
  const futureDate: Date = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 30);
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex: number = futureDate.getMonth();
  const monthName: string = months[monthIndex];
  const day: number = futureDate.getDate();

  const result = `${monthName} ${day}`;

  return {
    futureDate: result,
  };
};
