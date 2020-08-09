import React, { useState, useEffect } from 'react';
import RegisterPanel from './components/RegisterPanel';
import { H1, P, Button, DynamicInput } from 'components';
import { pxToRem, flexCenter } from 'styles/mixins';
import algoritmicaPng from 'assets/png/algoritmica.png';
// import webmobilePng from 'assets/png/webmobile.png';
// import gamedevPng from 'assets/png/gamedev.png';
import media from 'styles/media';
import styled from 'styled-components';
import headerTadaBg from 'assets/png/header-tada-bg.png';
import _ from 'lodash';
import axios from 'axios';
import schema from './schema';
import Cookie from 'js-cookie';
// import { Link } from 'translations';
import { withTranslation } from 'translations';

const Error = styled.div`
  color: #c0392b;
  font-size: ${pxToRem(14)};
  margin-top: -18px;
  margin-bottom: 5px;
  margin: ${props => props.backendError && '10px 0'};
  text-align: left;
  width: ${props => (props.backendError ? '100%' : 'initial')};
`;

const FancyImage = styled.img`
  width: ${pxToRem(110)};
  height: auto;
  margin-bottom: 20px;
  ${media.md`
      width: ${pxToRem(70)};
    `}
  ${media.sm`
      width: ${pxToRem(60)};
    `}
`;

const FancyImageContainer = styled.div`
  background: url(${headerTadaBg});
  width: ${pxToRem(150)};
  height: ${pxToRem(150)};
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  font-weight: 600;
  ${flexCenter}
`;

const FancyImageRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  ${media.md`
    flex-direction: column;
    align-items: center;
    justify-contentL center;
  `}
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
    ${media.md`
      margin 0;
    `}
  }
  > div {
    &:first-child {
      border: ${props => props.active && '4px solid #193C46'};
    }
  }
`;

const CategoryText = styled.div`
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  button {
    width: ${pxToRem(150)};
  }
`;

const StepContainer = styled.div`
  width: 100%;
`;

const RegisterWrapper = styled.div`
  overflow-y: ${props => (props.hasScroll ? 'scroll' : 'inherit')};
  height: 100%;
  width: 100%;
  padding: ${pxToRem(30)};
  display: flex;
  flex-direction: column;
  ${flexCenter}
  justify-content: ${props => (props.hasScroll ? 'flex-start' : 'center')};
  ${media.md`
    padding: ${pxToRem(10)};
  `}
`;

const paths = {
  webdev: [
    'accountDetails',
    'categories',
    'userInfo',
    'links',
    'team',
    'success',
  ],
  gamedev: [
    'accountDetails',
    'categories',
    'userInfo',
    'links',
    'team',
    'success',
  ],
  algo: ['accountDetails', 'categories', 'userInfo', 'links', 'success'],
};

const categories = [
  // { key: 'webdev', image: webmobilePng, title: 'Web/Mobile' },
  { key: 'algo', image: algoritmicaPng, title: 'Algoritmica' },
  // { key: 'gamedev', image: gamedevPng, title: 'GameDev' },
];

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

const Login = ({ t }) => {
  const [activeStep, setActiveStep] = useState('accountDetails');
  const [stepsCount, setStepsCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePath, setActivePath] = useState([]);
  const [fields, setFields] = useState({
    userCount: 2,
    team: [],
    name: '',
    size: 'M',
    tshirt: 'M',
  });
  const [errors, setErrors] = useState([]);
  const [teamErrors, setTeamErrors] = useState([]);
  const [userId, setUserId] = useState('');
  const [backendErrors, setBackendErrors] = useState('');

  useEffect(() => {
    axios.defaults.baseURL = 'https://api.asii.ro/fiicode/api';
    const userId = Cookie.get('userId');
    const token = Cookie.get('token');

    if (userId) {
      setUserId(userId);
      setActiveStep('categories');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const getErrors = field => {
    let errors = [];
    if (field.required) {
      if (!field.value) {
        errors = [...errors, t('register:required')];
      }
    }
    if (field.type === 'Email') {
      if (field.value) {
        if (!validateEmail(field.value)) {
          errors = [...errors, t('register:required-email')];
        }
      }
    }
    return {
      name: field.name,
      schemaName: field.schemaName,
      errors,
    };
  };

  const handlePrevStep = () => {
    const path = paths[activeCategory];

    const currentPathIndex = parseInt(
      path.findIndex(item => activeStep === item)
    );

    const prevStep =
      currentPathIndex !== 0
        ? path[currentPathIndex - 1]
        : path[currentPathIndex];

    setActiveStep(prevStep);
  };

  const handleNextStep = () => {
    if (activeStep === 'accountDetails') {
      setActiveStep('categories');
    } else {
      if (activeStep === 'categories') {
        if (activeCategory) {
          const path = paths[activeCategory];

          if (activeStep === 'categories') {
            setStepsCount(path.length - 1);
          }

          const currentPathIndex = parseInt(
            path.findIndex(item => activeStep === item)
          );

          const nextStep =
            path.length !== currentPathIndex + 1
              ? path[currentPathIndex + 1]
              : path[currentPathIndex];
          setActiveStep(nextStep);
        }
      } else {
        const path = paths[activeCategory];

        if (activeStep === 'categories') {
          setStepsCount(path.length);
        }

        const currentPathIndex = parseInt(
          path.findIndex(item => activeStep === item)
        );

        const nextStep =
          path.length !== currentPathIndex + 1
            ? path[currentPathIndex + 1]
            : path[currentPathIndex];
        if (activeStep !== 'categories' && activeStep !== 'team') {
          let errors = Object.keys(schema[activeStep]).map(item => {
            return getErrors({
              name: item,
              value: fields[item],
              schemaName: activeStep,
              ...schema[activeStep][item],
            });
          });

          if (activeCategory === 'algo') {
            errors = [...errors.filter(item => item.name !== 'github')];
          }

          if (activeCategory !== 'algo') {
            errors = [...errors.filter(item => item.name !== 'csacademy')];
          }

          setErrors(errors);

          if (!errors.find(item => item.errors.length > 0)) {
            setActiveStep(nextStep);
          }
        } else {
          setActiveStep(nextStep);
        }
      }
    }
  };

  const handleSetActiveCategory = category => {
    if (category !== 'algo') {
      setFields({ ...fields, csacademy: '' });
    }
    if (category === 'algo') {
      setFields({ ...fields, github: '' });
    }
    setActiveCategory(category);
    setActivePath(paths[category]);
  };

  const handleChange = e => {
    const {
      target: { name, value },
    } = e;

    const fieldErrors = getErrors({
      name,
      value,
      schemaName: activeStep,
      ...schema[activeStep][name],
    });

    const notError =
      (activeCategory !== 'algo' && name === 'csacadmy') ||
      (activeCategory === 'algo' && name === 'github');

    if (!notError && fieldErrors.errors.length) {
      setErrors([...errors, fieldErrors]);
    } else {
      setErrors(errors.filter(item => item.name !== name));
    }

    setBackendErrors('');
    setFields({ ...fields, [name]: value });
  };

  const handleTeamEdit = (e, key) => {
    const {
      target: { name, value },
    } = e;

    let { team } = fields;

    if (!team[key]) {
      team = [...team, {}];
    }

    let hasError = false;

    if (!value) {
      setTeamErrors([...teamErrors, { name, error: t('register:required') }]);
      hasError = true;
    } else {
      if (name === 'email') {
        if (!validateEmail(value)) {
          hasError = true;

          setTeamErrors([
            ...teamErrors.filter(
              item =>
                item.error !== t('register:required-email') &&
                item.name === name
            ),
            { name, error: t('register:required-email') },
          ]);
        }
      }
    }

    if (hasError === false) {
      setTeamErrors(teamErrors.filter(item => item.name !== name));
    }

    team[key][name] = value;

    setBackendErrors('');
    setFields({ ...fields, team });
  };

  const handleSubmit = () => {
    const {
      country,
      city,
      age,
      phone,
      team,
      school,
      facebook,
      csacademy,
      tshirt = 'M',
      github,
    } = fields;

    const newTeam = team.map(item => {
      const tshirt = item.tshirt || 'M';

      return { ...item, tshirt };
    });

    axios
      .post('/aria', {
        userId: userId,
        aria: activeCategory,
        country,
        city,
        age,
        phone,
        facebook,
        csacademy,
        tshirt,
        members: newTeam,
        terms: true,
        school,
        github,
      })
      .then(() => {
        handleNextStep();
        Cookie.remove('userId');
      })
      .catch(err => {
        const error = err.response.data.message;

        setBackendErrors(error);
      });
  };

  const handleRegister = () => {
    const { name, email, password } = fields;

    const errors = Object.keys(schema[activeStep]).map(item => {
      return getErrors({
        name: item,
        value: fields[item],
        schemaName: activeStep,
        ...schema[activeStep][item],
      });
    });

    const errorCount = errors
      .map(item => item.errors.length)
      .reduce((acc, curr) => acc + curr);

    setErrors(errors);

    if (!errorCount) {
      axios
        .post('/register', {
          name,
          email,
          password,
        })
        .then(({ data }) => {
          const { user, token } = data;

          setUserId(user._id);
          Cookie.set('userId', user._id);
          Cookie.set('token', token);

          handleNextStep();
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        })
        .catch(err => {
          const error = err.response.data.message;

          setBackendErrors(error);
        });
    }
  };

  return (
    <RegisterPanel
      activeStep={
        activeStep === 'categories'
          ? 2
          : activePath.findIndex(item => item === activeStep) + 1
      }
      stepsCount={stepsCount}
    >
      <RegisterWrapper
        hasScroll={activeStep === 'team' || activeStep === 'userInfo'}
      >
        <H1>
          {activeStep !== 'success'
            ? t('register:title')
            : t('register:success')}
        </H1>
        <P center>{activeStep !== 'success' ? t('register:subTitle') : ''}</P>
        {activeStep === 'categories' && (
          <>
            <FancyImageRow>
              {categories.map(({ key, image, title }) => (
                <CategoryContainer
                  key={key}
                  active={key === activeCategory}
                  onClick={() => handleSetActiveCategory(key)}
                >
                  <FancyImageContainer>
                    <FancyImage src={image} alt={key} />
                  </FancyImageContainer>
                  <CategoryText>{title}</CategoryText>
                </CategoryContainer>
              ))}
            </FancyImageRow>
          </>
        )}
        {activeStep === 'userInfo' && (
          <StepContainer>
            {Object.keys(schema.userInfo).map(item => {
              const fieldErrors = errors.find(
                error => error.name === item && error.schemaName === activeStep
              );

              return (
                <>
                  <DynamicInput
                    {...schema.userInfo[item]}
                    key={item}
                    label={t(`register:${item}`)}
                    placeholder={t(`register:${item}`)}
                    value={fields[item]}
                    name={item}
                    onChange={handleChange}
                  />
                  {fieldErrors &&
                    fieldErrors.errors.map((item, key) => (
                      <Error key={key}>{item}</Error>
                    ))}
                </>
              );
            })}
          </StepContainer>
        )}
        {activeStep === 'links' && (
          <StepContainer>
            {Object.keys(schema.links).map(item => {
              if (item === 'csacademy' && activeCategory !== 'algo') {
                return null;
              }
              if (item === 'github' && activeCategory === 'algo') {
                return null;
              }
              const fieldErrors = errors.find(
                error => error.name === item && error.schemaName === activeStep
              );

              if (
                item === 'userCount' &&
                activeCategory &&
                activeCategory === 'algo'
              ) {
                return null;
              }

              return (
                <>
                  <DynamicInput
                    {...schema.links[item]}
                    key={item}
                    label={t(`register:${item}`)}
                    placeholder={t(`register:${item}`)}
                    value={
                      item === 'userCount'
                        ? parseInt(fields[item])
                        : fields[item]
                    }
                    name={item}
                    onChange={handleChange}
                  />
                  {fieldErrors &&
                    fieldErrors.errors.map((item, key) => (
                      <Error key={key}>{item}</Error>
                    ))}
                </>
              );
            })}
          </StepContainer>
        )}
        {activeStep === 'team' && (
          <StepContainer>
            {new Array(parseInt(fields.userCount - 1))
              .fill(0)
              .map((item, key) => {
                return Object.keys(schema.team).map(item => {
                  const fieldErrors = teamErrors.filter(
                    error => error.name === item
                  );
                  return (
                    <>
                      <DynamicInput
                        {...schema.team[item]}
                        key={item}
                        value={_.get(fields, `team[${key}][${item}]`)}
                        name={item}
                        label={
                          t(`register:${item}`) +
                          ` ${t('register:user')} ${key + 2}`
                        }
                        placeholder={
                          t(`register:${item}`) +
                          ` ${t('register:user')} ${key + 2}`
                        }
                        onChange={e => handleTeamEdit(e, key)}
                      />
                      {fieldErrors &&
                        fieldErrors.map((item, key) => (
                          <Error key={key}>{item.error}</Error>
                        ))}
                    </>
                  );
                });
              })}
          </StepContainer>
        )}
        {activeStep === 'accountDetails' && (
          <StepContainer>
            {Object.keys(schema.accountDetails).map(item => {
              const fieldErrors = errors.find(
                error => error.name === item && error.schemaName === activeStep
              );
              return (
                <>
                  <DynamicInput
                    {...schema.accountDetails[item]}
                    key={item}
                    value={
                      item === 'userCount'
                        ? parseInt(fields[item])
                        : fields[item]
                    }
                    name={item}
                    label={t(`register:${item}`)}
                    placeholder={t(`register:${item}`)}
                    onChange={handleChange}
                  />
                  {fieldErrors &&
                    fieldErrors.errors.map((item, key) => (
                      <Error key={key}>{item}</Error>
                    ))}
                </>
              );
            })}
          </StepContainer>
        )}
        {backendErrors && <Error backendError>{backendErrors}</Error>}

        {activeStep !== 'success' && (
          <ButtonContainer>
            {activeStep !== 'categories' && activeStep !== 'accountDetails' ? (
              <Button type="submit" onClick={handlePrevStep}>
                {t('register:prev')}
              </Button>
            ) : (
              <div />
            )}
            <Button
              type="submit"
              disabled
              onClick={() => {
                if (activeStep === 'accountDetails') {
                  handleRegister();
                } else {
                  if (
                    activeCategory &&
                    paths[activeCategory].findIndex(
                      item => item === activeStep
                    ) ===
                      paths[activeCategory].length - 2
                  ) {
                    handleSubmit();
                  } else {
                    handleNextStep();
                  }
                }
              }}
            >
              {activeCategory &&
              activeStep !== 'accountDetails' &&
              paths[activeCategory].findIndex(item => item === activeStep) ===
                paths[activeCategory].length - 2
                ? 'Submit'
                : t('register:next')}
            </Button>
          </ButtonContainer>
        )}
      </RegisterWrapper>
    </RegisterPanel>
  );
};

Login.getInitialProps = async ({ query: { status } }) => ({
  status,
  namespacesRequired: ['form', 'register'],
});

export default withTranslation('register')(Login);
