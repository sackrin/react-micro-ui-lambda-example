import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { makeStyles, TextField } from '@material-ui/core';
import { useDebouncedCallback as useDebounce } from 'use-debounce';

type StyleClasses = () => {
  field: string;
};

type Props = {
  label?: string;
  type?: string;
  value: any;
  error?: string | void;
  showError?: boolean;
  className?: string;
  onChange: (val: string) => void;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  field: {
    marginTop: '.2rem',
    marginBottom: '.2rem',
  },
}));

export const SimpleField = ({
  value,
  error,
  showError = false,
  type = 'text',
  onChange = val => {},
  className = '',
  ...props
}: Props) => {
  // In order to reduce the amount of state updates
  // We will use a debouncer and a value buffer
  const [buffered, setBuffered] = useState(value);
  // Generate a debouncer callback
  // We will use this to control the frequency of the user's updates
  const [debounced] = useDebounce(onChange, 500);
  // If the value is updated externally
  // We will want to update the buffered value
  // Since the buffered value is the value shown
  useEffect(() => {
    setBuffered(value);
  }, [value]);
  // Watch the buffered value for changes
  // If the value changes we want to trigger a debounced update
  useEffect(() => {
    debounced(buffered);
  }, [buffered]);
  // Update the buffer value when the textfield is updated
  const onUpdate = e => {
    setBuffered(e.target.value);
  };
  const classes = useStyles();
  return (
    <TextField
      type={type}
      value={buffered}
      fullWidth
      error={showError && !!error}
      onChange={onUpdate}
      margin="normal"
      variant="outlined"
      className={classnames('test-simpleField', classes.field, className)}
      {...props}
    />
  );
};

export default SimpleField;
