import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

interface FormInputProps {
  name: string
  type: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FormInput({ name, type, label, value, onChange }: FormInputProps) {
  const [isCripto, setIsCripto] = useState<boolean>(type === "password" ? true : false)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const showOrHidePassword = () => {
    setIsCripto(!isCripto)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const currentIcon = isCripto ? faEye : faEyeSlash
  const iconColor = isFocused ? "text-background-div1" : "text-not-so-white"

  return (
    <div className="m-auto mb-4 w-fit flex-col">
      <label className="flex text-left font-semibold text-not-so-white">{label}</label>
      <div className="relative flex">
        <input
          className={`group relative h-[40px] w-[220px] rounded-md bg-background-div1 px-2 text-sm text-not-so-white shadow-inner3 shadow-translucid-black outline-translucid-black transition-all duration-300 focus:bg-not-so-white focus:text-black focus:shadow-inner3-hover focus:outline-none xs:h-[50px] xs:w-[250px] md:w-[300px] ${
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
            className={`absolute right-[15px] top-[15px] h-[20px] cursor-pointer text-not-so-white ${iconColor}`}
          ></FontAwesomeIcon>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
