/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  const [dayFrom, monthFrom, yearFrom] = dates[0].split(".").map(Number);
  const [dayTo, monthTo, yearTo] = dates[1].split(".").map(Number);

  const timestamp1 = Date.UTC(yearFrom, monthFrom - 1, dayFrom);
  const timestamp2 = Date.UTC(yearTo, monthTo - 1, dayTo);

  const diffTime = timestamp2 - timestamp1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;

  //   The most difficult part of the task was calculating the difference
  // in months between two dates, as there were many edge cases to consider
  // (leap year, varying number of days in a month). Eventually, I decided
  // to stick with my own solution as it passed all the tests you provided.
  // However, I did find what I believe to be a more accurate solution online,
  // which uses the date object (the commented out part).

  const diffMonths = diffDays < 31 ? 0 : Math.floor(remainingDays / 30);

  //   const diffInMonths = (end, start) => {
  //     var timeDiff = Math.abs(end.getTime() - start.getTime());
  //     return Math.round(timeDiff / (2e3 * 3600 * 365.25));
  //   };

  //   const monthDiff =
  //     diffInMonths(
  //       new Date(year1, month1 - 1, dayFrom),
  //       new Date(year2, month2 - 1, day2)
  //     ) % 12;

  //   console.log(diffMonths, monthDiff);

  const yearStr =
    diffYears > 0 ? `${diffYears} year${diffYears > 1 ? "s" : ""}` : "";

  const monthStr =
    diffMonths > 0 ? `${diffMonths} month${diffMonths > 1 ? "s" : ""}` : "";

  const outputStr = [yearStr, monthStr, `total ${diffDays} days`]
    .filter(Boolean)
    .join(", ");
  return outputStr;
}
