import * as React from 'react';
import {Control, Controller, FieldError, FieldPath, FieldValues, RegisterOptions} from 'react-hook-form';
import {InputContainer, InputError, InputStyle} from './styles';

interface LocalInputProps<T extends FieldValues> {
  id: FieldPath<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}

export default function Input<T extends FieldValues>({ id, label, control, error, rules, ...rest }: LocalInputProps<T> & React.HTMLProps<HTMLInputElement>) {
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <Controller<T>
        control={control}
        rules={rules}
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
      {error ? <InputError>{error.message}</InputError> : null}
    </>
  );
}
