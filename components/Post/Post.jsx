import React from 'react';
import styled from 'styled-components';
import HeartIcon from 'components/svg/icons/HeartIcon';
import { withTranslation } from 'translations';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-right: ${({ borderRight, theme }) =>
    borderRight ? `5px solid ${theme.colors.primary}` : ''};
  border-bottom: ${({ borderBottom, theme }) =>
    borderBottom ? `5px solid ${theme.colors.primary}` : ''};
  flex: 1;
`;
const PostTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Utopia Std';
`;
const PostDescription = styled.div`
  width: 100%;
  white-space: normal;
  padding: 10px 0;
  font-size: 18px;
  line-height: 22px;
`;
const PostActions = styled.div`
  padding: 5px 0;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;
const PostActionsLike = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const PostActionsLikesCount = styled.div``;

const Post = ({ title, description, likesCount, t, type, complexContent }) => {
  if (type != "complex") {
    return (
      <PostContainer>
        <PostTitle>
          {title || 'Au început înscrierile!'}
        </PostTitle>
        <PostDescription>
          {description ||
            `S-a dat startul înscrierilor pentru fiecare dintre cele trei
            arii (Web/Mobile, Algoritmică și Game Development). Vă puteți înregistra apăsând pe butonul
            de mai sus!`}
        </PostDescription>
        <PostActions>
          <PostActionsLike>
            <HeartIcon />
            <span>{t('like.action')}</span>
          </PostActionsLike>
          <PostActionsLikesCount>
            {likesCount || 12} {t('like.status')}
          </PostActionsLikesCount>
        </PostActions>
      </PostContainer>
    );
  }
  else {
    return(
      <PostContainer>
          <PostTitle>
      {title || 'Au început înscrierile!'}
    </PostTitle>
          <PostDescription>
      {complexContent}
    </PostDescription>
          <PostActions>
      <PostActionsLike>
        <HeartIcon />
        <span>{t('like.action')}</span>
      </PostActionsLike>
      <PostActionsLikesCount>
        {likesCount || 12} {t('like.status')}
      </PostActionsLikesCount>
    </PostActions>
        </PostContainer>
    )
  }
};

export default withTranslation('post')(Post);
