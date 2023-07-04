import React, { useState } from "react";

interface AuthFormSubmitButtonProps {
  disabled: boolean;
}

export default function AuthFormSubmitButton({
  disabled,
}: AuthFormSubmitButtonProps) {
  // Setting button hover state
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Conditional styling to avoid nested ternary operations. Button escapes if both conditions are true
  let shouldTranslate =
    isHovered === true && disabled
      ? `md:translate-x-[200%]`
      : `md:translate-x-0`;

  // Function to trigger a state change on mouse over
  const handleMouseOver = () => {
    if (disabled === true) {
      setIsHovered(!isHovered);
    }
  };

  // Returns the styled and responsive button to submit the form on ContactForm.tsx
  return (
    <button
      id="submitButton"
      onMouseOver={handleMouseOver}
      type="submit"
      disabled={disabled}
      className={`${shouldTranslate}  relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-black transition-all duration-75 disabled:opacity-80`}
    >
      <i className="fa fa-send"></i>
    </button>
  );
}
