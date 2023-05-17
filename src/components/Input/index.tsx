import * as React from "react";
import {Control, Controller} from "react-hook-form";
import {InputContainer, InputStyle} from "./styles";

interface LocalInputProps<T> {
  id: string;
  label: string;
  control: Control<T>
}

export default function Input<T>({ id, label, control, ...rest }: LocalInputProps<T> & React.HTMLProps<HTMLInputElement>) {
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <Controller 
        control={control}
        name={id}
        render={({ field }) => 
          <InputContainer>
            <InputStyle 
              id={id} 
              {...field}
              {...rest} 
            />
          </InputContainer>
        }
      />
    </>
  );
}
