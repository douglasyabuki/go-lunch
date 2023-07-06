import * as React from "react";

interface AuthFormInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AuthFormInput({ name, type, label, value, onChange }: AuthFormInputProps) {
  return (
    <div className="m-auto w-fit flex-col mb-4">
      <label className="flex text-left font-semibold text-not-so-white">{label}</label>
      <input
        className="h-[40px] w-[220px] rounded-md bg-background-div1 px-2 text-sm text-not-so-white shadow-inner3 shadow-translucid-black outline-translucid-black transition-all duration-300 focus:bg-not-so-white focus:text-black focus:shadow-inner3-hover focus:outline-none xs:h-[50px] xs:w-[250px] md:w-[300px]"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
