import React, { useCallback, useContext } from 'react';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import { SimpleField, SimpleDropdown } from '../Common/Fields';
import {
  RegisterContext,
  setRegisterAddressValueAction,
} from '../../Context/Register';

type Props = {
  className?: string;
};

const RegisterFormAddress = ({ className = '' }: Props) => {
  const { dispatch, address } = useContext(RegisterContext);
  const onValue = useCallback(
    property => e => dispatch(setRegisterAddressValueAction(property, e)),
    [dispatch],
  );
  return (
    <div className={classnames('test-registerFormAddress', className)}>
      <Grid container={true} spacing={2}>
        <Grid item xs={4}>
          <SimpleField
            label="Street Number"
            onChange={onValue('streetNumber')}
            value={address.data.streetNumber}
            error={address.errors?.streetNumber}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleField
            label="Street Name"
            onChange={onValue('streetName')}
            value={address.data.streetName}
            error={address.errors?.streetName}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleDropdown
            label="Street Type"
            onChange={onValue('streetType')}
            options={[
              { value: 'Cl', label: 'Cl' },
              { value: 'Ct', label: 'Ct' },
              { value: 'St', label: 'St' },
              { value: 'Pl', label: 'Pl' },
              { value: 'Ave', label: 'Ave' },
            ]}
            value={address.data.streetType}
            error={address.errors?.streetType}
          />
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        <Grid item xs={8}>
          <SimpleField
            label="Suburb"
            onChange={onValue('suburb')}
            value={address.data.suburb}
            error={address.errors?.suburb}
          />
        </Grid>
        <Grid item xs={4}>
          <SimpleField
            label="Postcode"
            onChange={onValue('postcode')}
            value={address.data.postcode}
            error={address.errors?.postcode}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterFormAddress;
