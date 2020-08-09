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
  margin-right: 5px;
`;
const StyledLabel = styled.div`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: ${pxToRem(10)};
`;

const RadioInputContainer = styled.div`
  margin: 0 10px;
  display: flex;
`;

const Input = ({ label, required, value, onChange, options, ...props }) => {
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
      {options.map(({ key, title }) => {
        return (
          <RadioInputContainer key={key}>
            <StyledInput
              id={key}
              type="radio"
              required={required}
              onSubmit={handleSubmit}
              onChange={onChange}
              value={key}
              checked={key === parseInt(value)}
              {...props}
            />
            <label htmlFor={key}>{title}</label>
          </RadioInputContainer>
        );
      })}
    </FormGroup>
  );
};
Input.propTypes = propTypes;
export default Input;
