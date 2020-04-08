import * as React from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileProgress = <P extends {}>(props: P) => (
  <MicroUIComponent
    microUi={{
      url: 'http://localhost:9000',
      library: 'compareTheMarketWizard',
      name: 'ProfileProgress',
    }}
    {...props}
  />
);

export default ProfileProgress;
