import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const FormStyled = styled.form`
  width: 100%;
`;
const Form = ({ children, onSubmit, ...props }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit} {...props}>
        {children}
      </FormStyled>
    </>
  );
};
Form.propTypes = propTypes;
export default Form;
