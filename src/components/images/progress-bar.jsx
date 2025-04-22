

export function ProgressBar({className}) {
    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="#E6EFFC"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
    ></path>
    <path
      fill="#347DE9"
      d="M12 2c0-1.105.902-2.017 1.99-1.834a12 12 0 0 1 9.844 9.843C24.017 11.1 23.104 12 22 12h-2c-1.105 0-1.969-.92-2.33-1.963a6 6 0 0 0-3.707-3.707C12.92 5.97 12 5.105 12 4z"
    ></path>
  </svg>
    )
}