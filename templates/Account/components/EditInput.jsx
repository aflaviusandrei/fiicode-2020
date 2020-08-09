import React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
import theme from 'styles/theme'
import EditIcon from '../../../public/assets/svg/icons/edit.svg'

const InputContainer = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Input = styled.input`
    border-radius: 4px;
    border: none;
    padding: 10px;
    background: ${theme.colors.darkBeige};
`;

const InnerCont = styled.span`
    width: 100%;
    display: flex;
    position: relative;
`;

const Edit = styled(EditIcon)`
    fill: black;
    position: absolute;
    right: 15px;
    margin: auto;
    top: 20%;
    font-size: 1.5em;
    cursor: pointer;
`;

const Save = styled.button`
    background: ${theme.colors.primary};
    color: white;
    border-radius: 4px;
    border: none;
    width: 120px;
    padding: 7px;
    cursor: pointer;
`;

const ButtonContainer = styled.span`
    display: flex;
    flex-direction: row !important;
    justify-content: flex-end;
    margin-top: 10px;
    width: 100%;
    overflow: hidden;
    transition: all 0.2s ease-in;
`;

export default class EditInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            buttonCont: {
                height: "0px"
            }
        }
    }

    toggleEdit = () => {
        let val = this.state.edit;
        if (val) {
            this.setState({
                edit: false,
                buttonCont: {
                    height: "0px"
                }
            })
        }
        else {
            this.setState({
                edit: true,
                buttonCont: {
                    height: "32px"
                }
            })
        }
    }

    render() {
        let type, repo;
        if (this.props.account.arie == "Algo") {
            type = "CSAcademy";
            repo = this.props.account.csc;
        }
        else {
            type = "Repo";
            repo = this.props.account.repo;
        }
        return (
            <InputContainer>
                <p>{type}</p>
                <InnerCont>
                    {this.state.edit ? <Input value={repo}></Input> : <Input value={repo} disabled></Input>}
                    <Edit onClick={this.toggleEdit} />
                </InnerCont>
                <ButtonContainer style={this.state.buttonCont}>
                    <Save>Save</Save>
                </ButtonContainer>
            </InputContainer >
        )
    }
}