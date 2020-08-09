import styled from 'styled-components';

export default styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
