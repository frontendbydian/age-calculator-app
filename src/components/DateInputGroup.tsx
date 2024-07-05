import React, { ChangeEvent } from "react";

type InputType = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function DateInputGroup({ label, placeholder, value, setValue }: InputType) {
  const validateChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
    const date = new Date();

    const currentYear = date.getFullYear();

    const inputValue = e.currentTarget.value;
    const inputNumber = Number(inputValue);

    let maxValue: number = 0;

    switch (label) {
      case "DAY":
        maxValue = 31;
        break;
      case "MONTH":
        maxValue = 12;
        break;
      case "YEAR":
        maxValue = currentYear + 1;
        break;
      default:
        maxValue = 31;
    }

    if (!isNaN(inputNumber) && inputNumber < maxValue) {
      if (
        inputValue[0] == "0" &&
        ["1", "2", "3"].includes(inputValue[1]) &&
        inputNumber >= 10
      ) {
        setValue(inputValue.slice(1));
      } else {
        setValue(inputValue);
      }
      console.log(inputNumber);
    }
  };

  const validateBlur = (value: string) => {
    if (Number(value) < 10 && value[0] != "0") {
      setValue("0" + value);
    }
  };

  return (
    <div className="flex flex-col gap-1 md:gap-2 ">
      <label
        className="text-xs font-bold tracking-widest md:text-base text-custom-smokey-grey"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="px-3 py-2 text-lg font-bold border-2 rounded-lg md:text-3xl md:px-6 md:min-h-16 border-custom-light-grey max-w-20 md:max-w-36"
        type="text"
        name={label}
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => validateChange(e, label)}
        onBlur={() =>
          label == "DAY" || label == "MONTH" ? validateBlur(value) : null
        }
      />
    </div>
  );
}

export default DateInputGroup;
