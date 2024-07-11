import React from "react";

type InputProps = {
  id: string,
  type: string,
  placeholder: string,
};

const Input: React.FC<InputProps> = ({ id, type, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-foreground dark:border-gray-600 dark:bg-background-dark dark:text-primary-foreground-dark"
    />
  );
};

export default Input;
