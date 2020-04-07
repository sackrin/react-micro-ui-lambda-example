const getDefaultTheme = () => ({
  typography: {
    useNextVariants: true,
    fontSize: 13,
    htmlFontSize: 13,
  },
  overrides: {
    MuiTypography: {},
    MuiFilledInput: {},
  },
});

export default getDefaultTheme;
