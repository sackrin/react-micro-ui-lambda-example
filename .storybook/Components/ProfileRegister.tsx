import * as React from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileRegister = <P extends {}>(props: P) => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
    <div style={{ width: '100%', maxWidth: '32rem' }}>
      <MicroUIComponent
        microUi={{
          url: 'http://localhost:9000',
          library: 'compareTheMarketWizard',
          name: 'ProfileRegister',
        }}
        {...props}
      />
    </div>
  </div>
);

export default ProfileRegister;
