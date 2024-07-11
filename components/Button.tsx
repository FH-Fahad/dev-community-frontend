import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset",
  children: React.ReactNode,
  darkMode?: boolean,
};

const Button: React.FC<ButtonProps> = ({ type, children, darkMode }) => {
  const buttonClasses = darkMode
    ? "w-full px-4 py-2 rounded-md bg-primary-dark text-primary-foreground-dark font-medium hover:bg-primary-darker"
    : "w-full px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary-dark";

  return (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
