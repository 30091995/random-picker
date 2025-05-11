"use client";

import { Button as ReactAriaButton } from "react-aria-components";
import buttonStyles from "./Button.module.css"
import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const Button = ({ label, className,onClick }: ButtonProps) => {
  return (
    <ReactAriaButton className={clsx(buttonStyles["customButton"],className)} onClick={onClick}>
      {label}
    </ReactAriaButton>
  );
};
