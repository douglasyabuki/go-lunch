import React, { useState } from "react";

/*
  IMPORTS
*/

/*  Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput({
  name,
  type,
  label,
  value,
  onChange,
}: FormInputProps) {
  const [isCripto, setIsCripto] = useState<boolean>(
    type === "password" ? true : false
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const showOrHidePassword = () => {
    setIsCripto(!isCripto);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let currentIcon = isCripto ? faEye : faEyeSlash;
  const iconColor = isFocused ? "text-background-div1" : "text-not-so-white";

  return (
    <div className="m-auto w-fit flex-col mb-4">
      <label className="flex text-left font-semibold text-not-so-white">
        {label}
      </label>
      <div className="flex relative">
        <input
          className={`h-[40px] w-[220px] rounded-md bg-background-div1 px-2 text-sm text-not-so-white shadow-inner3 shadow-translucid-black outline-translucid-black transition-all duration-300 focus:bg-not-so-white focus:text-black focus:shadow-inner3-hover focus:outline-none xs:h-[50px] xs:w-[250px] md:w-[300px] group relative ${
            isFocused ? "input-focused" : ""
          }`}
          type={type === "password" ? (isCripto ? "text" : "password") : type}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {type === "password" ? (
          <FontAwesomeIcon
            onClick={showOrHidePassword}
            icon={currentIcon}
            className={`text-not-so-white absolute right-[15px] top-[15px] h-[20px] cursor-pointer ${iconColor}`}
          ></FontAwesomeIcon>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
