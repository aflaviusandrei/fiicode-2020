import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import { pxToRem } from 'styles/mixins';

const propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
};
const StyledTextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 120px;
    overflow: auto;
    border-radius: 8px;
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

const TextArea = ({label,name,onChange,required,defaultValue,...props}) => {
    const id = uniqid();
    return (
        <FormGroup>
            {label && (
                <StyledLabel htmlFor={id}>
                    {label}
                    {required && '*'}
                </StyledLabel>
             )}
             <StyledTextArea
             id={id}
            required={required}
            onChange={onChange}
            defaultValue={defaultValue}
            {...props}
            />
        </FormGroup>
    );
};
TextArea.propTypes = propTypes;
export default TextArea;