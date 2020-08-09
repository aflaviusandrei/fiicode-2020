import React, { useEffect } from 'react';
import styled from 'styled-components';
import WebGameAccount from './components/WebGameAccount'
import AlgoAccount from './components/AlgoAccount'

const Account = (props) => {
  if (props.account.arie == "Web / Mobile" || props.account.arie == "Game Dev")
    return (
      <WebGameAccount account={props.account} />
    )
  else
    return (
      <AlgoAccount account={props.account} />
    )
}

export default Account