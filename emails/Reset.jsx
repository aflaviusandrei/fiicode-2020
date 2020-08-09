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
      Schimbarea parolei este foarte simpla, te rugam sa dai click pe link-ul de
      mai jos.
    </Text>
    <Link to={LINK}>Resetare parola</Link>
  </Body>
);

export default email;
