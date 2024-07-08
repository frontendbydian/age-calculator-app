import { useState } from "react";
import DateGroup from "./DateGroup";

function AgeCalculatorCard() {
  const [dateDiff, setDateDiff] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });
  return (
    <div className="w-11/12 max-w-[800px] bg-white  rounded-3xl rounded-br-[50px] md:rounded-br-[200px] p-8 md:p-16 py-16 gap-8 md:gap-0 flex flex-col items-stretch ">
      <DateGroup setDateDiff={setDateDiff} />
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="flex gap-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">{dateDiff.year}</span>
          <span>years</span>
        </p>
        <p className="flex gap-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">{dateDiff.month}</span>
          <span>months</span>
        </p>
        <p className="flex gap-x-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">{dateDiff.day}</span>
          <span>days</span>
        </p>
      </div>
    </div>
  );
}

export default AgeCalculatorCard;
