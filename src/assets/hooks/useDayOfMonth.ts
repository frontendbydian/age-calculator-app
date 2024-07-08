export const useDayOfMonth = (year: number) => {
  let isLeapYear = false;
  if (year % 4 === 0 && year % 100 != 0) {
    isLeapYear = true;
  }

  if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  return {
    listNumberOfDay: {
      1: 31,
      2: isLeapYear ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    },
  };
};
