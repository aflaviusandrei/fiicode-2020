import React from 'react';
import { Input, RadioInput, Select, Checkbox } from 'components';

const DynamicInput = ({
  type,
  value,
  options,
  name,
  required,
  onChange,
  ...props
}) => {
  if (type === String) {
    return (
      <Input
        required={required}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }
  if (type === 'Password') {
    return (
      <Input
        required={required}
        type="password"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }

  if (type === 'Email') {
    return (
      <Input
        {...props}
        required={required}
        type="email"
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (type === 'Radio') {
    return (
      <RadioInput
        required={required}
        value={value}
        name={name}
        onChange={onChange}
        options={options}
        {...props}
      />
    );
  }

  if (type === Object) {
    return (
      <Select
        required={required}
        name={name}
        onChange={onChange}
        options={options}
        {...props}
      />
    );
  }

  if (type === Number) {
    return (
      <Input
        {...props}
        required={required}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (type === Boolean) {
    return (
      <Checkbox
        required={required}
        type="checkbox"
        name={name}
        onChange={e => {
          onChange({
            target: { name: e.target.name, value: e.target.checked },
          });
        }}
        {...props}
      />
    );
  }

  return (
    <Input
      required={required}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default DynamicInput;
