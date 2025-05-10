"use client";

import { Button as ReactAriaButton } from "react-aria-components";
import buttonStyles from "./Button.module.css"
import clsx from "clsx";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  
  return (
    <ReactAriaButton className={buttonStyles["customButton"]}>
      {label}
    </ReactAriaButton>
  );
};
