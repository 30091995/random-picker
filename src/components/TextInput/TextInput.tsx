"use client";

import { TextField, Input } from "react-aria-components";
import textInputStyles from "./TextInput.module.css";

interface TextInput {
  onChange: (value: string) => void;
  value: string;
}

export const TextInput = ({ onChange, value }: TextInput) => {
  return (
    <TextField className={textInputStyles["textInputWrapper"]}>
      <Input
        className={textInputStyles["textInput"]}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </TextField>
  );
};
