"use client";

import { Button as ReactAriaButton } from "react-aria-components";
import buttonStyles from "./Button.module.css"

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <ReactAriaButton className={buttonStyles["customButton"]} onClick={onClick}>
      {label}
    </ReactAriaButton>
  );
};
