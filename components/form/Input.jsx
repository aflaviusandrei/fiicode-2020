import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import { pxToRem } from 'styles/mixins';

const propTypes = {
  label: PropTypes.string,
};
const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  outline: 0;
  margin-bottom: ${pxToRem(5)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 10px;
`;
const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: ${pxToRem(10)};
`;

const Input = ({ label, name, value, onChange, required,defaultValue,...props }) => {
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
        onSubmit={handleSubmit}
        onChange={onChange}
        name={name}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
    </FormGroup>
  );
};
Input.propTypes = propTypes;
export default Input;
