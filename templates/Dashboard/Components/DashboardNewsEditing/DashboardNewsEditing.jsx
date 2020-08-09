import React, { useState } from 'react';
import NewArticleForm from './components/NewArticleForm';
import NewsList from './components/NewsList';
import styled from 'styled-components';
import media from 'styles/media';
import { Button } from 'components';

const DashboardNewsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  overflow: auto;
  ${media.lg`
    width: 90%;
  `}
  ${media.md`
    flex-direction: column;
  `}
`;
const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-content: center;
  width: 600px;
  ${media.md`
    width: 90%;
  `}
`;
const news = [
  {
    title: "Anunt nou!",
    area: "Game dev",
    content: "Au inceput inscrierile!"
  },
  {
    title: "Anunt nou!",
    area: "Algoritmica",
    content: "Au inceput inscrierile!"
  },
  {
    title: "Anunt nou!",
    area: "Web/Mobile",
    content: "Au inceput inscrierile!"
  },
];
const DashboardNewsediting = ()=> { 
    const [isAdding,setIsAdding] = useState(false);
    return(
        <DashboardNewsContainer>
          <NewsList news ={news}/>
          {isAdding?
            <NewArticleForm _closeHandler={()=>{setIsAdding(false);}}/>
            :
            <AddButtonContainer>
              <Button onClick = {()=>{setIsAdding(true)}}>Adauga un articol</Button>
            </AddButtonContainer>
            
          }
        </DashboardNewsContainer>
    );
};

export default DashboardNewsediting;
