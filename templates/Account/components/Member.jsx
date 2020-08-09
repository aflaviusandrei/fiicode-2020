import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
import theme from 'styles/theme';
import AccountCircle from 'assets/svg/icons/accountCircle.svg'
import FbLogo from 'assets/svg/icons/fbb.svg'
import Education from 'assets/svg/icons/educationIcon.svg'
import Phone from 'assets/svg/icons/phoneContact.svg'

const MemberCont = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.beige};
    border-radius: 10px;
    margin: 20px 0px;
    padding: 20px 50px;
    width: 45%;
    text-align: center;
    span {
        display: flex;
        width: 100%;
        margin: 10px auto;
        justify-content: center;
    }
    span > p {
        margin: auto 0;
    }
    ${media.lg`
        width: 90%;
    `}
`;

const Facebook = styled(FbLogo)`
    font-size: 1em;
    margin: auto 10px auto 0;
`;

const School = styled(Education)`
    font-size: 1em;
    margin: auto 10px auto 0;
`;

const Contact = styled(Phone)`
    font-size: 1em;
    margin: auto 10px auto 0;
`;

const Avatar = styled(AccountCircle)`
    fill: ${theme.colors.black};
    font-size: 6em;
    margin: 0 auto;
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: 1px solid ${theme.colors.lightBeige};
    padding-bottom: 20px;
    margin-bottom: 10px;
    h1 {
        margin: 0 auto;
        font-size: 1.5em;
    }
    p {
        font-style: italic;
        margin: 0;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

const Member = (props) => {
    return (
        <MemberCont>
            <AvatarContainer>
                <Avatar />
                <h1>{props.member.name}</h1>
                <p>{props.member.city} , {props.member.country}</p>
            </AvatarContainer>
            <Details>
                <span><School /><p>{props.member.school}</p></span>
                <span><Facebook /><p>{props.member.fb.substr(24)}</p></span>
                <span><Contact /><p>{props.member.phone}</p></span>
            </Details>
        </MemberCont>
    )
}

export default Member;