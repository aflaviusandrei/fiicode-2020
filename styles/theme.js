import { pxToRem } from 'styles/mixins';

const colors = {
  primary: '#193C46',
  primaryLight: '#3c626d',
  primaryLighter: '#4d707a',
  green: '#c1dee6',
  blue: '#88BFE7',
  darkBlue: '#2F3490',
  red: '#D12A2B',
  beige: '#E4E2C5',
  white: '#fff',
  black: '#444',
  grey: '#999',
  lightBeige: '#bbb9a2',
  darkBeige: '#d0ceb4'
};
const components = {
  navbar: {
    height: '64px',
    backgroundColor: colors.primary
  },
  navbarDrawer: {
    width: '65vw'
  },
  field: {
    header: {
      height: '100px',
      smheight: '80px'
    },
    profile: {
      width: pxToRem(290),
      height: pxToRem(290)
    },
    tabSelector: {
      height: pxToRem(58),
      width: pxToRem(316)
    }
  }
};
const transition = {
  default: '250ms ease'
};

const spacing = {
  normal: '2rem',
  large: '3rem',
  xlarge: '4rem',
  xxlarge: '5rem'
};

export default {
  colors,
  components,
  spacing,
  transition
};
