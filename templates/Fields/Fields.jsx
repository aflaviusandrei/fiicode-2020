import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import FieldHeaderBanner from './components/FieldHeader/FieldHeaderBanner';
import styled from 'styled-components';
import FieldContainer from './components/FieldContainer';
import FieldTabSelectors from './components/FieldTabSelectors';
import ReactMarkdown from 'react-markdown';
import media from 'styles/media';
import uniqid from 'uniqid';
import { withTranslation } from 'translations';

const propTypes = {
  config: PropTypes.object,
};

const FieldWrapper = styled.div`
  padding-top: 5rem;
  ${media.lg`
    padding-top: 2rem;
  `}
`;

const FieldContainerStyled = styled(FieldContainer)`
  margin-top: 1rem;
  & hr {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-left: 0;
    border-right: 0;
    height: 4px;
  }
  & * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FieldSmallInfoContainer = styled.div`
  display: none;
  ${media.xl`
    display: block;
  `}
`;

const Fields = ({ config, t, i18n }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const mdBody = (() => {
    switch (selectedTabIndex) {
      case 0: {
        return config.content.info;
      }
      case 1: {
        return config.content.rules;
      }
      case 2: {
        return config.content.previousEditions;
      }
    }
  })();
  return (
    <FieldWrapper>
      <FieldHeaderBanner
        title={config.title}
        color={config.color}
        image={config.image}
        roundsInfo={config.roundsInfo}
      />
      <FieldContainerStyled>
        <FieldSmallInfoContainer>
          {config.roundsInfo.map(({ title, content }) => (
            <div key={uniqid()}>
              <strong>{title}</strong> {content}
            </div>
          ))}
          <hr />
        </FieldSmallInfoContainer>
        <ReactMarkdown source={mdBody} />
      </FieldContainerStyled>
      <FieldTabSelectors
        onSelect={setSelectedTabIndex}
        selectedIndex={selectedTabIndex}
        color={config.color}
        items={[t('menu.info'), t('menu.rules'), t('menu.previous')]}
      />
    </FieldWrapper>
  );
};

Fields.propTypes = propTypes;
export default withTranslation('fields')(Fields);
