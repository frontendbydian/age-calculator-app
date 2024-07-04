function AgeCalculatorCard() {
  return (
    <div className="w-11/12 max-w-[800px] bg-white  rounded-3xl rounded-br-[50px] md:rounded-br-[200px] p-8 md:p-16 py-16 gap-8 md:gap-0 flex flex-col items-stretch ">
      <div className="flex justify-between md:justify-start md:gap-8">
        <div className="flex flex-col gap-1 md:gap-2 ">
          <p className="text-xs font-bold tracking-widest md:text-base text-custom-smokey-grey">
            DAY
          </p>
          <input
            type="number"
            pattern="[0-9]{1,2}"
            className="px-3 py-2 text-lg font-bold border-2 rounded-lg md:text-3xl md:px-6 md:min-h-16 border-custom-light-grey max-w-20 md:max-w-36"
            placeholder="DD"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-xs font-bold tracking-widest md:text-base text-custom-smokey-grey">
            MONTH
          </p>
          <input
            type="number"
            pattern="[0-9]{1,2}"
            className="px-3 py-2 text-lg font-bold border-2 rounded-lg md:text-3xl md:px-6 md:min-h-16 border-custom-light-grey max-w-20 md:max-w-36"
            placeholder="MM"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-xs font-bold tracking-widest md:text-base text-custom-smokey-grey">
            YEAR
          </p>
          <input
            type="number"
            pattern="[0-9]{1,2}"
            className="px-3 py-2 text-lg font-bold border-2 rounded-lg md:text-3xl md:px-6 md:min-h-16 border-custom-light-grey max-w-20 md:max-w-36"
            placeholder="YYYY"
          />
        </div>
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
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="flex gap-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">38</span>
          <span>years</span>
        </p>
        <p className="flex gap-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">3</span>
          <span>months</span>
        </p>
        <p className="flex gap-x-2 text-[54px] leading-none italic font-extrabold md:gap-4 lg:text-8xl ">
          <span className="text-custom-purple">26</span>
          <span>days</span>
        </p>
      </div>
    </div>
  );
}

export default AgeCalculatorCard;
