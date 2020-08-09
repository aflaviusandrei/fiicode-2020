import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
import theme from 'styles/theme'
import Member from './Member'
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
    `}
`;

const MembersArea = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background: ${theme.colors.lightBeige};
    justify-content: space-around;
    border-radius: 5px;
`;

const WebGameAccount = (props) => {
    const members = props.account.members.map((user) =>
        <Member member={user} />
    );
    return (
        <AccountArea>
            <LeftSideArea account={props.account} />
            <RightArea>
                <AccountDetails account={props.account} />
                <MembersArea>
                    {members}
                </MembersArea>
            </RightArea>
        </AccountArea>
    )
}

export default WebGameAccount