import React, { useCallback, useState } from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileForm = <P extends {}>(props: P) => {
  const onRegister = useCallback((profile, address) => {
    console.log('REGISTERED', profile, address);
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '32rem' }}>
        <MicroUIComponent
          microUi={{
            url: 'http://localhost:9000',
            library: 'exampleProfileMicroFrontend',
            name: 'ProfileProgress',
          }}
        />
        <div style={{ display: 'block', height: '3.5rem' }} />
        <MicroUIComponent
          microUi={{
            url: 'http://localhost:9000',
            library: 'exampleProfileMicroFrontend',
            name: 'ProfileRegister',
          }}
          onRegister={onRegister}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
