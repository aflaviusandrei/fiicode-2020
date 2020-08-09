import styled from 'styled-components';

export default styled.div`
  display: none;
  position: absolute;
  top: 90%;
  left: 0;
  min-width: 0;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.primary};
`;
