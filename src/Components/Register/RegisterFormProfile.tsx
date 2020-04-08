import React, { useContext, useCallback } from 'react';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import { SimpleField } from '../Common/Fields';
import { RegisterContext, setRegisterProfileValueAction } from '../../Context';

type Props = {
  className?: string;
};

const RegisterFormProfile = ({ className = '' }: Props) => {
  const { dispatch, profile } = useContext(RegisterContext);
  const onValue = useCallback(
    property => e => dispatch(setRegisterProfileValueAction(property, e)),
    [dispatch],
  );
  return (
    <div className={classnames('test-registerFormProfile', className)}>
      <Grid container={true} spacing={2}>
        <Grid item xs={6}>
          <SimpleField
            label="First Name"
            value={profile.data.firstName}
            error={profile.errors?.firstName}
            onChange={onValue('firstName')}
          />
        </Grid>
        <Grid item xs={6}>
          <SimpleField
            label="Last Name"
            value={profile.data.lastName}
            error={profile.errors?.lastName}
            onChange={onValue('lastName')}
          />
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        <Grid item xs={12}>
          <SimpleField
            label="Email Address"
            type="email"
            value={profile.data.email}
            error={profile.errors?.email}
            onChange={onValue('email')}
          />
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        <Grid item xs={12}>
          <SimpleField
            label="Phone Number"
            value={profile.data.phone}
            error={profile.errors?.phone}
            onChange={onValue('phone')}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterFormProfile;