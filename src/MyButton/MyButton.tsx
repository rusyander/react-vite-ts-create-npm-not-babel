import React from "react";
import "./MyButton.css";

export interface MyButtonProps {
  color: string;
  big?: boolean;
  children?: React.ReactNode;
}

export default function MyButton({
  children,
  color,
  big,
  ...props
}: MyButtonProps) {
  const rootClasses = ["my-button"];
  if (big) {
    rootClasses.push("big-btn");
  }
  return (
    <button {...props} className={rootClasses.join(" ")} style={{ color }}>
      {children}
    </button>
  );
}
