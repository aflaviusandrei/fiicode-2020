import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
import theme from 'styles/theme'
import FieldHeaderProfile from '../../Fields/components/FieldHeader/FieldHeaderProfile';
import headerTadaBg from 'assets/png/header-tada-bg.png';
import webdev from '../../../public/assets/png/webmobile.png';
import gamedev from '../../../public/assets/png/gamedev.png';
import algoicon from '../../../public/assets/png/algoritmica.png'
import FbLogo from '../../../public/assets/svg/icons/fb.svg'
import Education from '../../../public/assets/svg/icons/educationIcon.svg'
import Phone from '../../../public/assets/svg/icons/phoneContact.svg'
import EditInput from './EditInput'

const AreaCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background: ${theme.colors.primaryLight};
    margin-right: 30px;
    border-radius: 5px;
    ${media.lg`
        width: 100%;
        margin-bottom: 20px;
    `}
`;

const ImgCont = styled.div`
    border-radius: 50%;
    background-image: url(${headerTadaBg});
    background-size: cover;
    background-position: center;
    display: flex;
    width: 200px;
    height: 200px;
    margin: 30px auto 0 auto;
`;

const Web = styled.img`
    width: 70%;
    margin: auto;
`;

const AreaTitle = styled.h1`
    color: ${theme.colors.white};
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 15px 0;
`;

const PersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: white;
    span {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    h1 {
        margin: 0;
    }
`;

const Facebook = styled(FbLogo)`
    font-size: 1em;
    margin: auto 10px auto 0;
    fill: white;
`;

const School = styled(Education)`
    font-size: 1em;
    margin: auto 10px auto 0;
    fill: white;
`;

const Contact = styled(Phone)`
    font-size: 1em;
    margin: auto 10px auto 0;
    fill: white;
`;

const LeftSideArea = (props) => {
    let avatar;
    if (props.account.arie == "Web / Mobile") avatar = webdev;
    else if (props.account.arie == "Gamedev") avatar = gamedev;
    else avatar = algoicon;
    if (props.account.arie != "Algo") {
        return (
            <AreaCont>
                <ImgCont>
                    <Web src={avatar} />
                </ImgCont>
                <AreaTitle>{props.account.arie}</AreaTitle>
            </AreaCont>
        )
    }
    else {
        return (
            <AreaCont>
                <ImgCont>
                    <Web src={avatar} />
                </ImgCont>
                <AreaTitle style={{
                    borderBottom: "1px solid",
                    borderColor: theme.colors.primary,
                    fontSize: '1.7em'
                }}>{props.account.arie}</AreaTitle>
                <PersonalDetails>
                    <h1>{props.account.members[0].name}</h1>
                    <p style={{
                        fontStyle: "italic",
                        borderBottom: "1px solid",
                        borderColor: theme.colors.primary,
                        paddingBottom: "15px"
                    }}>{props.account.members[0].city} , {props.account.members[0].country}</p>
                    <span><School /><p>{props.account.members[0].school}</p></span>
                    <span><Facebook /><p>{props.account.members[0].fb.substr(24)}</p></span>
                    <span><Contact /><p>{props.account.members[0].phone}</p></span>
                </PersonalDetails>
            </AreaCont >
        )
    }
}

export default LeftSideArea