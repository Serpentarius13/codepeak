export function createWeek(date: Date | string): Date[] {
  const currentDate = new Date(); // Get the current date
  const datesArray = [];

  // Loop to generate 7 dates
  for (let i = 0; i < 7; i++) {
    datesArray.push(new Date(currentDate)); // Add the current date to the array
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
  }

  return datesArray;
}

export function shrinkMonthName(monthName: string) {
  monthName = monthName.toLowerCase();
  if (monthName.at(-1) === "й") return monthName.slice(0, -1) + "я";
  else return monthName.slice(0, 3);
}
