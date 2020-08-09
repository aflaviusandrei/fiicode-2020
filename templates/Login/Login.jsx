import React from 'react';
import LoginPanel from './components/LoginPanel';
import { H1, P, Form, Input, Button, Alert } from 'components';
import styled from 'styled-components';
import { Link } from 'translations';
import { withTranslation } from 'translations';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 10px 0;
  }
`;

const Login = ({ status, t }) => {
  function handleSumbmit() {
    alert('SUMBITTED');
  }
  if (status === 'verified') {
    status = t('verification.success');
  }
  return (
    <LoginPanel>
      {status && <Alert>{status}</Alert>}
      <H1>{t('login:title')}</H1>
      <P>{t('login:description')}</P>
      <Form onSubmit={handleSumbmit}>
        <Input
          required
          label="Email"
          placeholder="email@yahoo.com"
          type="email"
        />
        <Input
          required
          label={t('password-label')}
          placeholder="password"
          type="password"
        />
        <ButtonsContainer>
          <Button type="submit" disabled>
            {t('login:submit')}
          </Button>
          {/* <span>or</span>
          <Link href="/register">
            <a href="">Register</a>
          </Link> */}
        </ButtonsContainer>
      </Form>
    </LoginPanel>
  );
};

Login.getInitialProps = async ({ query: { status } }) => ({
  status,
  namespacesRequired: ['form', 'login'],
});

export default withTranslation('form')(Login);
