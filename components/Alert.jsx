import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool
};
const Alert = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.green};
  width: 100%;
  margin-bottom: 1rem;
`;

Alert.propTypes = propTypes;
export default Alert;
