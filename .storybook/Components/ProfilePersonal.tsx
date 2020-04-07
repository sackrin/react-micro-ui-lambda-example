import * as React from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfilePersonal = <P extends {}>(props: P) => (
  <MicroUIComponent
    microUi={{ url: 'http://localhost:9000', library: 'compareTheMarketWizard', name: 'ProfilePersonal' }}
    {...props}
  />
);

export default ProfilePersonal;
