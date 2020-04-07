import * as React from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileAddress = <P extends {}>(props: P) => (
  <MicroUIComponent
    microUi={{ url: 'http://localhost:9000', library: 'compareTheMarketWizard', name: 'ProfileAddress' }}
    {...props}
  />
);

export default ProfileAddress;
