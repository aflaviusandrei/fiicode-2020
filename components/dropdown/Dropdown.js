import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DropdownHead from './components/DropdownHead';
import DropdownBody from './components/DropdownBody';
import DropdownItem from './components/DropdownItem';

const propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.node.isRequired,
};

const DropdownElement = styled.div`
  position: relative;
  height: 100%;
  ${props =>
    props.isOpened &&
    css`
      ${DropdownBody} {
        display: block;
      }
    `}
`;

const Dropdown = ({ children, head }) => {
  const ref = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  function toggleIsOpened() {
    setIsOpened(isOpened => !isOpened);
  }
  function handleDocumentClickOutside({ target }) {
    if (!ref.current.contains(target)) {
      setIsOpened(false);
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', handleDocumentClickOutside);
    return () => {
      document.body.removeEventListener('click', handleDocumentClickOutside);
    };
  }, []);
  return (
    <DropdownElement ref={ref} isOpened={isOpened}>
      <DropdownHead onClick={toggleIsOpened} isCaretReversed={isOpened}>
        {head}
      </DropdownHead>
      <DropdownBody>{children}</DropdownBody>
    </DropdownElement>
  );
};

Dropdown.propTypes = propTypes;

export { Dropdown, DropdownHead, DropdownBody, DropdownItem };
