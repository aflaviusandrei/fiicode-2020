import React from "react";
import styled from 'styled-components';
import media from 'styles/media'
import NavLogo from 'assets/png/fiicodeImg.png';
import HmburgerSvg from 'assets/svg/icons/hamburger.svg';

const Bar = styled.div`
    ${media.lg`
        display: flex;
    `}
    height: 70px;
    display: none;
    width: 100vw;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background: #193c46;
`;

const LogoCont = styled.div`
    display: flex;
    max-height: 100%;
    height: 100%;
    padding: 20px;
`;

const BurgerCont = styled.div`
    padding: 15px;
    display: flex;
    max-height: 100%;
    height: 100%;
`;

const HamburgerIcon = styled(HmburgerSvg)`
  fill: white;
  font-size: 2rem;
  cursor: pointer;
  margin: auto;
`;

const BarLogo = styled.img`
    margin: auto 0;
    height: 100%;
    width: auto;
`;

const Topbar = (props) => {
    return (
        <Bar>
            <LogoCont>
                <BarLogo src={NavLogo} />
            </LogoCont>
            < BurgerCont >
                <HamburgerIcon onClick={props.toggleNav} />
            </BurgerCont >
        </Bar >
    )
}

export default Topbar;