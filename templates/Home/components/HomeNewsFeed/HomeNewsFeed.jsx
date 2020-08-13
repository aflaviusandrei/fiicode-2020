import React from 'react';
import EmptySpaceImg from 'assets/png/emptySpaceImage.png';
import styled from 'styled-components';
import Post from '../../../../components/Post/Post';
import media from 'styles/media';
import { withTranslation } from 'translations';
import i18next from 'i18next';

const NewsFeed = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  width: 100%;
  padding: 20px ${({ theme }) => theme.spacing.xlarge};
  font-family: 'Utopia Std';
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  ${media.xl`
    flex-direction: column;
  `}
  ${media.sm`
    padding: 20px 5px;
  `}
`;

const NewsFeedHeaderSubtitle = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-bottom: 5px;
  font-family: 'Utopia Std';
  text-transform: uppercase;
`;

const NewsFeedHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Utopia Std';
  text-transform: uppercase;
  padding-top: 10px;
  margin-botton: -10px;
  font-size: 80px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  ${media.sm`
    font-size: 60px;
  `}
`;

const NewsFeedContent = styled.div`
  margin-top: 3px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  ${media.xl`
    flex-direction: column;
  `}
`;

const NewsFeedContentLeftSide = styled.div`
  border-right: 5px solid ${({ theme }) => theme.colors.primary};
  flex: 2;
  ${media.xl`
    border: none;
  `}
`;

const NewsFeedContentRightSide = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.xl`
    flex-direction: column;
  `}
`;

const EmptySpaceImgContainer = styled.img`
  padding: 5px 15px 10px 10px;
  width: auto;
  @media (max-width: 1500px) {
    max-width: 500px;
  }
  @media (max-width: 1400px) {
    max-width: 420px;
  }
  ${media.xl`
    max-width: 100vw;
  `}
`;
const NewsFeedRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.xl`
    flex-direction: column;
  `}
  > div {
    flex: 1;
  }
`;
const NewsFeedContentRightSideBottom = styled.div`
  border-bottom: 5px solid #193c46;
`;

const HomeNewsFeed = ({ t }) => {
  if (i18next.language == "en-US") {
    return (
      <NewsFeed>
        <NewsFeedHeaderSubtitle></NewsFeedHeaderSubtitle>
        <NewsFeedHeader>Newsfeed</NewsFeedHeader>
        <NewsFeedContent>
          {/* <Post title={t('news.a1.title')} description={t('news.a1.content')} /> */}
          <Post
            title="The FIICode Final will take place between the 28th and 30th of August!"
            type="complex"
            complexContent={
              <div>
                <h3>Friday, 28 August</h3>
                <ul>
                <li>17:00 - 17:30 : Opening Ceremony</li>
                <li>17:30 - 18:15 : Diamond Partner presentation and quiz</li>
                <li>18:15 - 19:30 : Live Library</li>
                </ul>
                <h3>Saturday, 29 August</h3>
                <ul>
                <li>10:00 - 18:00 : Web/Mobile & Game Dev Contest</li>
                <li>16:00 - 18:00 : Algorithmic Contest</li>
                <li>18:00 - 19:00 : Web/Mobile & Game Dev Presentation</li>
                </ul>
                <h3>Sunday, 30 August</h3>
                <ul>
                <li>14:00 - 14:45 : Diamond Partner presentation and quiz</li>
                <li>14:45 - 15:00 : Gold Partner Presentation</li>
                <li>15:00 : Award Ceremony</li>
                </ul>
              </div>
            }
            description="În curând vom reveni cu mai multe detalii."
          />
        </NewsFeedContent>
        <NewsFeedContent>
          <Post title={t('news.a1.title')} description={t('news.a1.content')} />
          <Post
            title="S-a postat tema pentru Web/Mobile 2020!"
            description="Pentru mai multe informatii vizitati sectiunea ariei! 
          https://fiicode.asii.ro/web-mobile"
          />
        </NewsFeedContent>
        <NewsFeedContent>
          <Post
            title="S-a postat tema pentru GameDev 2020!"
            description="Pentru mai multe informatii vizitati sectiunea ariei! 
          https://fiicode.asii.ro/gamedev"
          />
          <Post />
        </NewsFeedContent>
      </NewsFeed>
    );
  }
  else {
    return (
      <NewsFeed>
        <NewsFeedHeaderSubtitle></NewsFeedHeaderSubtitle>
        <NewsFeedHeader>Newsfeed</NewsFeedHeader>
        <NewsFeedContent>
          {/* <Post title={t('news.a1.title')} description={t('news.a1.content')} /> */}
          <Post
            title="Finala FIICode 2020 va avea loc în perioada 28-30 August!"
            type="complex"
            complexContent={
              <div>
                <h3>Vineri, 28 August</h3>
                <ul>
                <li>17:00 - 17:30 : Ceremonia de deschidere</li>
                <li>17:30 - 18:15 : Prezentare Diamond Partner și quiz</li>
                <li>18:15 - 19:30 : Live Library</li>
                </ul>
                <h3>Sâmbătă, 29 August</h3>
                <ul>
                <li>10:00 - 18:00 : Concurs Web/Mobile & Game Dev</li>
                <li>16:00 - 18:00 : Algorithmic Contest</li>
                <li>18:00 - 19:00 : Web/Mobile & Game Dev Presentation</li>
                </ul>
                <h3>Duminică, 30 August</h3>
                <ul>
                <li>14:00 - 14:45 : Prezentare Diamond Partner și quiz</li>
                <li>14:45 - 15:00 : Prezentare Gold Partner</li>
                <li>15:00 : Ceremonia de premiere</li>
                </ul>
              </div>
            }
            description="În curând vom reveni cu mai multe detalii."
          />
        </NewsFeedContent>
        <NewsFeedContent>
          <Post title={t('news.a1.title')} description={t('news.a1.content')} />
          <Post
            title="S-a postat tema pentru Web/Mobile 2020!"
            description="Pentru mai multe informatii vizitati sectiunea ariei! 
          https://fiicode.asii.ro/web-mobile"
          />
        </NewsFeedContent>
        <NewsFeedContent>
          <Post
            title="S-a postat tema pentru GameDev 2020!"
            description="Pentru mai multe informatii vizitati sectiunea ariei! 
          https://fiicode.asii.ro/gamedev"
          />
          <Post />
        </NewsFeedContent>
      </NewsFeed>
    );
  }
};

export default withTranslation('home')(HomeNewsFeed);
