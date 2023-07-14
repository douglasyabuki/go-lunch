const emailRegex = /^[a-zA-Z0-9._%+-]+@gocn\.com\.br$/

export const mailValidator = (email: string) => {
  return emailRegex.test(email)
}
