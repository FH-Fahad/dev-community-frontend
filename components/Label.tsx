import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-medium text-sm text-muted-foreground dark:text-muted-foreground-dark"
    >
      {children}
    </label>
  );
};

export default Label;
