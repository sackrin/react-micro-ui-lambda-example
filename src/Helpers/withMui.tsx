import React from 'react';
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import getClassName from './getClassName';
import getDefaultTheme from './getDefaultTheme';

type WithMui = (Comp: any, seed: string) => <P extends {}>(props: P) => JSX.Element;

const withMui: WithMui = (Comp, seed) => props => (
  <StylesProvider generateClassName={getClassName(seed)}>
    <ThemeProvider theme={createMuiTheme(getDefaultTheme())}>
      <Comp {...props} />
    </ThemeProvider>
  </StylesProvider>
);

export default withMui;
