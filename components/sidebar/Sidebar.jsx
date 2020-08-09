import React from 'react';
import styled from 'styled-components';
import Nav from './components/nav';
import NavLogo from 'assets/png/fiicodeImg.png';
import media from 'styles/media';
import theme from 'styles/theme';
import CloseMenuSvg from 'assets/svg/icons/closeMenu.svg';

const SideBar = styled.div`
    diplay: flex;
    height: 100%;
    transition: all ${({ theme }) => theme.transition.default};
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #193c46 none repeat scroll 0% 0%;
    transform: translateX(0px);
    ${media.lg`
        width: 270px;
        transform: translateX(-270px);
        position: fixed;
        z-index: 1000;
        transition: all ${({ theme }) => theme.transition.default};
    `}
`;

const Logo = styled.img`
    width: 70%;
    margin: 35px auto;
`;

const InLogo = styled.img`
    width: 50%;
    margin: 35px auto;
`;

const CloseMenu = styled(CloseMenuSvg)`
    fill: ${theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
    ${media.lg`
        margin: auto 15px auto auto;
    `}
`;

const CloseContainer = styled.div`
    margin: auto;
    ${media.lg`
        display: flex;
        width: 40%;
    `}
`;

const SideHeader = styled.div`
    display: flex;
    justify-content: space-between;
    ${media.lg`
        display: flex;
        flex-direction: row;
        justify-content: flex-between;
        height: 60px;
        img {
            width: 50% !important;
            margin: auto 20px !important;
        }
    `}
`;

export default class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
            winWidth: window.innerWidth
        })
    }

    render() {
        if (this.state.winWidth <= 992) {
            return (
                <SideBar style={this.props.side}>
                    <SideHeader id="sideHeader">
                        <InLogo src={NavLogo} />
                        <CloseContainer>
                            <CloseMenu onClick={this.props.toggleNav} />
                        </CloseContainer>
                    </SideHeader>
                    <Nav></Nav>
                </SideBar>
            )
        }
        else {
            return (
                <SideBar style={this.props.side}>
                    <Logo src={NavLogo} />
                    <Nav></Nav>
                </SideBar>
            )
        }
    }
}