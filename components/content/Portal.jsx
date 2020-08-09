import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Portal = ({ children }) => {
  if (!process.browser) return null;
  const { current: domElement } = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(domElement);
    return () => {
      document.body.removeChild(domElement);
    };
  }, []);
  return ReactDOM.createPortal(children, domElement);
};

Portal.propTypes = propTypes;

export default Portal;
