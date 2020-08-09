import styled from 'styled-components';

export default styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  height: ${props => props.height + 'px'};
  width: ${props => props.width};
  margin-bottom: ${props => props.marginBottom + 'px'};
`;
