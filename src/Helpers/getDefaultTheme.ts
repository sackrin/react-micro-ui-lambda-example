import { createMuiTheme } from '@material-ui/core/styles';

const {
  typography: { pxToRem },
} = createMuiTheme({});

const getDefaultTheme = () => ({
  typography: {
    useNextVariants: true,
    fontSize: 13,
    htmlFontSize: 13,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: pxToRem(24),
        lineHeight: '32px',
      },
      h2: {
        fontSize: pxToRem(20),
        lineHeight: '26px',
      },
      h3: {
        fontSize: pxToRem(18),
        lineHeight: '24px',
      },
      h4: {
        fontSize: pxToRem(16),
        lineHeight: '21px',
      },
      h5: {
        fontSize: pxToRem(16),
        lineHeight: '21px',
      },
      body1: {
        fontSize: pxToRem(14),
        letterSpacing: '0.2',
        lineHeight: '20px',
      },
      body2: {
        fontSize: pxToRem(14),
        letterSpacing: '0.2',
        lineHeight: '20px',
      },
      subtitle1: {
        fontSize: pxToRem(10),
        letterSpacing: '0.28',
        lineHeight: '14px',
      },
      subtitle2: {
        fontSize: pxToRem(10),
        letterSpacing: '0.28',
        lineHeight: '14px',
      },
      caption: {
        fontSize: pxToRem(12),
        letterSpacing: '0',
        lineHeight: '16px',
      },
    },
    MuiFilledInput: {},
  },
});

export default getDefaultTheme;
