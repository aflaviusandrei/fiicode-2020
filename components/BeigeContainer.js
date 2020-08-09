import styled from 'styled-components';

export default styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  width: 100vw;
  border-bottom: 10px solid transparent;
  padding: ${({ theme }) => theme.spacing.normal};

  > img {
    width: 100%;
  }
`;
