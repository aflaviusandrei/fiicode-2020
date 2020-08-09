import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
import theme from 'styles/theme';
import EditInput from './EditInput';

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.lightBeige};
    margin-bottom: 30px;
    border-radius: 5px;
    padding: 20px;
    ${media.lg`
        width: 100%;
    `}
`;

const DetailsTitle = styled.h1`
    width: 100%;
    font-size: 0.8em;
    margin-top: 0;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    span {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const Input = styled.input`
    border-radius: 4px;
    border: none;
    padding: 10px;
    background: ${theme.colors.darkBeige};
`;

const AccountDetails = (props) => {
    let repo;

    if (props.account.arie == "Algo") repo = props.account.csc;
    else repo = props.account.repo;

    return (
        <DetailsContainer>
            <DetailsTitle>DETAILS</DetailsTitle>
            <Details>
                <EditInput account={props.account} />
                <span>
                    <p>Contact mail:</p>
                    <Input value={props.account.members[0].mail} disabled />
                </span>
                <span>
                    <p>Contact phone:</p>
                    <Input value={props.account.members[0].phone} disabled />
                </span>
            </Details>
        </DetailsContainer>
    )
}

export default AccountDetails;