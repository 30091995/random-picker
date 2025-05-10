"use client";

import { TextField, Input } from "react-aria-components";
import textInputStyles from './TextInput.module.css'

export const TextInput = () => {
  return (
    <TextField>
      <Input className={textInputStyles["textInput"]}/>
    </TextField>
  );
};
