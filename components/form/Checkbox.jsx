import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { pxToRem } from 'styles/mixins';

const propTypes = {
  label: PropTypes.string,
};
const StyledInput = styled.input``;
const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: ${pxToRem(10)};
`;

const FormGroup = styled.div`
  display: flex;
`;

const Input = ({ label, name, value, onChange, required, ...props }) => {
  const id = uniqid();
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <FormGroup>
      <StyledInput
        type="checkbox"
        id={id}
        required={required}
        onSubmit={handleSubmit}
        onChange={onChange}
        name={name}
        value={value}
        {...props}
      />
      {label && (
        <StyledLabel htmlFor={id}>
          {label}
          {required && '*'}
        </StyledLabel>
      )}
    </FormGroup>
  );
};
Input.propTypes = propTypes;
export default Input;
