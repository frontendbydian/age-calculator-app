import React, { useState } from "react";
import DateInputGroup from "./DateInputGroup";

type Props = {
  a?: string;
};

function DateGroup({ ...props }: Props) {
  const { a } = props;
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  return (
    <React.Fragment>
      {a}
      <div className="flex justify-between md:justify-start md:gap-8">
        <DateInputGroup
          label="DAY"
          placeholder="DD"
          value={day}
          setValue={setDay}
        />
        <DateInputGroup
          label="MONTH"
          placeholder="MM"
          value={month}
          setValue={setMonth}
        />
        <DateInputGroup
          label="YEAR"
          placeholder="YYYY"
          value={year}
          setValue={setYear}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1 h-0 border"></div>
        <button className="p-4 rounded-full md:p-6 bg-custom-purple">
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
