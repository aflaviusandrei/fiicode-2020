import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/topbar'
import styled from 'styled-components';
import media from '../../styles/media';

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const DashRight = styled.div`
    width: 80%;
    height: 100%;
    overflow: auto;
    background: rgb(228, 226, 197);
    ${media.lg`
        width: 100%;
        overflow: initial;
        margin-top: 70px;
    `}
`;

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: 0,
            mask: {
                position: 'fixed',
                display: "none",
                top: 0,
                left: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 10,
                height: '100vh',
                width: '100vw'
            }
        }
    }

    toggleNav = () => {
        let val = this.state.nav;
        if (val) {
            this.setState({
                nav: 0,
                sideStyle: {
                    transform: 'translateX(-270px)'
                },
                mask: {
                    position: 'fixed',
                    display: "none",
                    top: 0,
                    left: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 10,
                    height: '100vh',
                    width: '100vw'
                }
            })
        }
        else {
            this.setState({
                nav: 1,
                sideStyle: {
                    transform: 'translateX(0px)'
                },
                mask: {
                    position: 'fixed',
                    display: "block",
                    top: 0,
                    left: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 10,
                    height: '100vh',
                    width: '100vw'
                }
            })
        }
    }

    render() {
        return (
            <DashboardContainer id="dashboard-container">
                <Topbar toggleNav={this.toggleNav} />
                <Sidebar side={this.state.sideStyle} toggleNav={this.toggleNav} />
                <DashRight id="dash-right-side">
                    {this.props.children}
                </DashRight>
                <b style={this.state.mask}></b>
            </DashboardContainer>
        )
    }
}
