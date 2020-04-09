import * as React from 'react';

const withProviders = (
  Comp: React.FunctionComponent,
  Providers: Array<
    React.FunctionComponent<{ children: JSX.Element; component: any }>
  >,
) => (props: any) =>
  Providers.reduce(
    (Wrapped, Provider) => <Provider children={Wrapped} component={props} />,
    <Comp {...props} />,
  );

export default withProviders;
