import * as React from 'react';

const withProviders = <P extends {}>(
  Comp: React.FunctionComponent,
  Providers: Array<React.FunctionComponent<{ children: JSX.Element; component: P }>>,
) => (props: any) =>
  Providers.reduce((Wrapped, Provider) => <Provider children={Wrapped} component={props} />, <Comp {...props} />);

export default withProviders;
