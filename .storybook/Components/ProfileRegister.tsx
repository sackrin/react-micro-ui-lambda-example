import * as React from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileRegister = <P extends {}>(props: P) => (
  <MicroUIComponent
    microUi={{ url: 'http://localhost:9000', library: 'compareTheMarketWizard', name: 'ProfileRegister' }}
    {...props}
  />
);

export default ProfileRegister;
