import React, { useEffect } from 'react';
import styled from 'styled-components';
import media from 'styles/media'
import AccountDetails from './AccountDetails'
import LeftSideArea from './LeftSideArea'

const AccountArea = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    ${media.lg`
        width: 95%;
        flex-direction: column;
    `}
`;

const RightArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    ${media.lg`
        width: 100%;
        flex-direction: column;
    `}
`;

const AlgoAccount = (props) => {
    return (
        <AccountArea>
            <LeftSideArea account={props.account} />
            <RightArea>
                <AccountDetails account={props.account} />
            </RightArea>
        </AccountArea>
    )
}

export default AlgoAccount