import React, { useCallback, useState } from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileForm = <P extends {}>(props: P) => {
  const [current, setCurrent] = useState('');
  const [stages, setStages] = useState([]);
  const onStages = useCallback(
    (stages, current) => {
      setCurrent(current);
      setStages(stages);
    },
    [setCurrent, setStages],
  );
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
          current={current}
          stages={stages}
        />
        <div style={{ display: 'block', height: '3.5rem' }} />
        <MicroUIComponent
          microUi={{
            url: 'http://localhost:9000',
            library: 'exampleProfileMicroFrontend',
            name: 'ProfileRegister',
          }}
          onStages={onStages}
          onRegister={onRegister}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
