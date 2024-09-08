'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: string;
}

export default function InputField({
  label,
  id,
  as = 'input',
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      {as === 'input' && (
        <Field
          as={as}
          {...rest}
          id={id}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        />
      )}
      {as === 'select' && (
        <Field
          as={as}
          {...rest}
          id={id}
          className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        >
          {rest.children}
        </Field>
      )}
      {as === 'textarea' && (
        <Field
          as={as}
          {...rest}
          id={id}
          className="p-3 text-sm rounded border border-gray-300 shadow"
        />
      )}
    </div>
  );
}
