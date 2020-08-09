import React from 'react';
import Body from './components/Body';
import Text from './components/Text';
import Title from './components/Title';
import { NAME, LINK } from './fields';
import Link from './components/Link';

const email = (
  <Body>
    <Title>Buna {NAME},</Title>
    <Text>
      Pentru a verifica contul tau, te rugam sa accesezi linkul de mai jos.
    </Text>
    <Link to={LINK}>Verificare cont</Link>
  </Body>
);

export default email;
