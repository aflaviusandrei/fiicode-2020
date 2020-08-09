import React from 'react';
import { Form, Input, Button, TextArea } from 'components';
import styled from 'styled-components';
import media from 'styles/media';

const NewArticleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-content: center;
  width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 15px;
  margin: 10px 0;
  ${media.md`
    width: 90%;
  `}
`;
const CloseButton = styled.button`
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;
  margin: 10px 0;
  color: #4d4d43;
  background:none;
  border:none;
  padding:0;
  cursor: pointer;
`;
const NewArticleForm = ({titleValue,areaValue,contentValue,...props}) => {

    const handleSumbmit = ()=> {
        alert('SUMBITTED');
    };
    return(
        <NewArticleFormContainer>
            <Form onSubmit = {handleSumbmit}>
                <Input required label="Titlu" placeholder="Titlul articolului" defaultValue={titleValue ? titleValue : ""} type="text"/>
                <Input required label="Sectiune" placeholder="Sectiunea" defaultValue={areaValue ? areaValue : ""} type="text"/>
                <TextArea required label="Continut" defaultValue={contentValue ? contentValue: ""} placeholder="Continutul articolului"/>
                <Button type="submit">Submit</Button>
            </Form>
            <CloseButton onClick={props._closeHandler}>Close</CloseButton>
        </NewArticleFormContainer>
    );
};

export default NewArticleForm;