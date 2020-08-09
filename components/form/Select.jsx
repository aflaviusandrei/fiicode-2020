import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import { pxToRem } from 'styles/mixins';

const propTypes = {
  label: PropTypes.string,
};
const StyledInput = styled.select`
  width: 100%;
  border-radius: 8px;
  outline: 0;
  margin-bottom: ${pxToRem(5)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
  height: 37px;
`;
const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: ${pxToRem(10)};
`;

const Input = ({
  label,
  name,
  required,
  onChange,
  options = [],
  default: defaultValue,
  ...props
}) => {
  const id = uniqid();
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <FormGroup>
      {label && (
        <StyledLabel htmlFor={id}>
          {label}
          {required && '*'}
        </StyledLabel>
      )}
      <StyledInput
        id={id}
        required={required}
        onChange={onChange}
        onSubmit={handleSubmit}
        name={name}
        selected={defaultValue}
        {...props}
      >
        {options.map(({ title, key }) => (
          <option key={key} value={key}>
            {title}
          </option>
        ))}
      </StyledInput>
    </FormGroup>
  );
};
Input.propTypes = propTypes;
export default Input;
