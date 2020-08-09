import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'styles/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const FieldContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 1rem;
  position: relative;

  ${media.xl`
    width: 100%;
    padding-right: ${({ theme }) => theme.components.field.tabSelector.width};
  `}
  ${media.md`
    width: 100%;
    padding-right: 4rem;
  `}
`;

FieldContainer.propTypes = propTypes;
export default FieldContainer;
