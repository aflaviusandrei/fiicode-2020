import styled from 'styled-components';
import BlueSection from 'assets/png/blueSection.png';

const BlueContainer = styled.img`
  margin-left: -200px;
  // are ceva cct svg-ul in stanga, o sa-l repar mai tarziu ca sa fie si asta normala
  min-width: calc(100vw + 350px);
  overflow-x: hidden;
`;

export default () => <BlueContainer src={BlueSection} alt="blue" />;
