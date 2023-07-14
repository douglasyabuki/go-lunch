import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface AuthFormSubmitButtonProps {
  disabled: boolean
}

export default function AuthFormSubmitButton({ disabled }: AuthFormSubmitButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const shouldTranslate = isHovered && disabled ? "md:translate-x-[200%]" : "md:translate-x-0"

  return (
    <button
      id="submitButton"
      onMouseOver={() => {
        if (disabled) {
          setIsHovered(!isHovered)
        }
      }}
      type="submit"
      disabled={disabled}
      className={`${shouldTranslate} relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-black transition-all duration-75 disabled:opacity-80`}
    >
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  )
}
