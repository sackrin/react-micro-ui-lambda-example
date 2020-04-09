import React, { useContext } from 'react';
import classnames from 'classnames';
import { RegisterContext } from '../../Context';
import { FormHeading, FormContainer, SimpleValue } from '../Common';
import { Grid, makeStyles } from '@material-ui/core';

type Props = {
  className?: string;
};

type StyleClasses = () => {
  personal: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  personal: {
    marginBottom: '.75rem',
  },
}));

const RegisterFormReview = ({ className = '' }: Props) => {
  const { profile, address } = useContext(RegisterContext);
  const classes = useStyles();
  return (
    <div
      data-register-form="Review"
      className={classnames('test-registerFormReview', className)}
    >
      <FormHeading>Review Details</FormHeading>
      <FormContainer className={classes.personal}>
        <Grid container={true} spacing={2}>
          <Grid item xs={6}>
            <SimpleValue label="First Name">
              {profile.data.firstName}
            </SimpleValue>
          </Grid>
          <Grid item xs={6}>
            <SimpleValue label="Last Name">{profile.data.lastName}</SimpleValue>
          </Grid>
        </Grid>
        <Grid container={true} spacing={2}>
          <Grid item xs={6}>
            <SimpleValue label="Email Address">
              {profile.data.email}
            </SimpleValue>
          </Grid>
          <Grid item xs={6}>
            <SimpleValue label="Phone Number">{profile.data.phone}</SimpleValue>
          </Grid>
        </Grid>
      </FormContainer>
      <FormContainer>
        <Grid container={true} spacing={2}>
          <Grid item xs={4}>
            <SimpleValue label="Street Number">
              {address.data.streetNumber}
            </SimpleValue>
          </Grid>
          <Grid item xs={4}>
            <SimpleValue label="Street Name">
              {address.data.streetName}
            </SimpleValue>
          </Grid>
          <Grid item xs={4}>
            <SimpleValue label="Street Type">
              {address.data.streetType}
            </SimpleValue>
          </Grid>
        </Grid>
        <Grid container={true} spacing={2}>
          <Grid item xs={6}>
            <SimpleValue label="Suburb">{address.data.suburb}</SimpleValue>
          </Grid>
          <Grid item xs={6}>
            <SimpleValue label="Postcode">{address.data.postcode}</SimpleValue>
          </Grid>
        </Grid>
      </FormContainer>
    </div>
  );
};

export default RegisterFormReview;
