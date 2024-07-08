import React, { Dispatch, SetStateAction, useState } from "react";
import DateInputGroup from "./DateInputGroup";
import { useDayOfMonth } from "../assets/hooks/useDayOfMonth";

type Props = {
  setDateDiff: Dispatch<
    SetStateAction<{ day: string; month: string; year: string }>
  >;
};

function DateGroup({ setDateDiff }: Props) {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [error, setError] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = () => {
    setDateDiff({ day: "- -", month: "- -", year: "- -" });
    if (!day || !month || !year) {
      const errorRequiresMessage: string = "This field is required";
      setError({
        day: !day ? errorRequiresMessage : "",
        month: !month ? errorRequiresMessage : "",
        year: !year ? errorRequiresMessage : "",
      });
      console.log(error);

      return;
    } else {
      setError({ day: "", month: "", year: "" });
    }

    const date = new Date(Number(year), Number(month) - 1, Number(day));
    console.log(date.getDate() != Number(day));

    if (date.getDate() != Number(day)) {
      setError({ day: "Must be a valid date", month: "", year: "" });
      return;
    }

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    console.log(currentDay, currentMonth, currentYear);

    let yearDiff: number = 0;
    let monthDiff: number = 0;
    let dayDiff: number = 0;

    yearDiff = currentYear - Number(year);
    monthDiff = currentMonth - Number(month);

    if (monthDiff < 0) {
      if (yearDiff == 0) {
        setError({ day: "Must be a past date", month: "", year: "" });
        return;
      }
      monthDiff += 12;
      yearDiff -= 1;
    }
    dayDiff = currentDay - Number(day);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { listNumberOfDay } = useDayOfMonth(Number(year));
    if (dayDiff < 0) {
      if (monthDiff == 0 && yearDiff == 0) {
        setError({ day: "Must be a past date", month: "", year: "" });
        return;
      }

      if (monthDiff - 1 <= 0) {
        yearDiff -= 1;
        monthDiff += 11;
      } else {
        monthDiff -= 1;
      }
      const numberOfDay =
        listNumberOfDay[
          Number(month) > 1
            ? ((Number(month) - 1) as
                | 1
                | 2
                | 3
                | 4
                | 5
                | 6
                | 7
                | 8
                | 9
                | 10
                | 11
                | 12)
            : 12
        ];
      dayDiff += numberOfDay;
    }

    console.log(yearDiff, monthDiff, dayDiff);

    setDateDiff({
      day: dayDiff.toString(),
      month: monthDiff.toString(),
      year: yearDiff.toString(),
    });
  };
  return (
    <React.Fragment>
      <div className="flex justify-between md:justify-start md:gap-8">
        <DateInputGroup
          label="DAY"
          placeholder="DD"
          value={day}
          setValue={setDay}
          error={error}
        />
        <DateInputGroup
          label="MONTH"
          placeholder="MM"
          value={month}
          setValue={setMonth}
          error={error}
        />
        <DateInputGroup
          label="YEAR"
          placeholder="YYYY"
          value={year}
          setValue={setYear}
          error={error}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1 h-0 border"></div>
        <button
          className="p-4 rounded-full md:p-6 bg-custom-purple"
          onClick={handleSubmit}
        >
          <span className="hidden">Calculate</span>
          <img
            src="/images/icon-arrow.svg"
            alt="icon arrow"
            className="w-8 h-8 md:w-full md:h-full"
          />
        </button>
        <div className="flex-1 h-0 border md:hidden"></div>
      </div>
    </React.Fragment>
  );
}

export default DateGroup;
