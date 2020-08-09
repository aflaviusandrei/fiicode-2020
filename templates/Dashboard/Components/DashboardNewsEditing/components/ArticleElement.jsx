import React,{ useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteIconSVG from 'assets/svg/icons/delete.svg';
import CaretDownSVG from 'assets/svg/icons/caretDown.svg';
import EditSVG from 'assets/svg/icons/edit.svg';
import NewArticleForm from './NewArticleForm';

const propTypes = {
    title: PropTypes.string,
    area: PropTypes.string,
    content: PropTypes.string,
};
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #bbb9a2;
  border-radius:5px;
  margin: 5px 0px;
  padding: 10px;
`;
const ArticleHeader = styled.div`
  display: flex;
  flex-direction: line;
  :hover {
    cursor: pointer;
  }
`;
const ArticleTitle = styled.div` 
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  font-family: 'Utopia Std';
  margin: 0 5px;
`;
const ArticleArea = styled.div`
  font-size: 18px;
  width: 100%;
  margin: 0 5px;
  font-size: 16px;
`;
const ArticleContent = styled.div`
  width: 100%;
  white-space: normal;
  padding: 10px 0;
  font-size: 16px;
  line-height: 16px;
  margin-left: 5px;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
`;


const ArticleElement = ({title,content,area,...props}) => {
    const [showFull,setShowFull] = useState(false);
    const [isEdited,setIsEdited] = useState(false);
    if(isEdited) {
      return (
        <NewArticleForm
        titleValue={title}
        contentValue={content}
        areaValue={area}
        _closeHandler={()=>{setIsEdited(false);}}
        />
      );
    } else {
        return(
          <ArticleContainer>
            <ArticleHeader onClick={()=>{setShowFull(!showFull)}}>
              <ArticleTitle>{title}</ArticleTitle>
              <ButtonSection>
                <EditSVG onClick={()=>{setIsEdited(!isEdited)}}/>
                <DeleteIconSVG/>
                <CaretDownSVG/>
              </ButtonSection>
            </ArticleHeader>
            <ArticleArea>{area}</ArticleArea>
              {showFull && <ArticleContent>{content}</ArticleContent>}
          </ArticleContainer>
      );
    }
}
ArticleElement.propTypes = propTypes;
export default ArticleElement;