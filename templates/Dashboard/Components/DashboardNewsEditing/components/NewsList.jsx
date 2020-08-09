import React from "react";
import ArticleElement from './ArticleElement';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styles/media';
import { H2 } from 'components';

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-content: center;
  margin: 10px 0;
  width: 600px;
  ${media.md`
    width: 90%;
  `}
`;
const propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
};
const NewsList = (props) => {
    return(
        <NewsListContainer>
            <H2>Lista de stiri</H2>
            {props.news.map(article => ( 
                <ArticleElement title ={article.title} area={article.area} content={article.content}/>
            ))}
        </NewsListContainer>
    );
};
NewsList.propTypes = propTypes;
export default NewsList;