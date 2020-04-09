import React from 'react';
import classnames from 'classnames';
import { makeStyles, MenuItem, TextField } from '@material-ui/core';

type StyleClasses = () => {
  field: string;
};

type Props = {
  label?: string;
  type?: string;
  error?: string | void;
  showError?: boolean;
  options: Array<{ value: string; label: string }>;
  value: any;
  className?: string;
  onChange: (val: string) => void;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  field: {
    marginTop: '.2rem',
    marginBottom: '.2rem',
  },
}));

export const SimpleDropdown = ({
  label,
  value,
  error,
  showError = false,
  options,
  type = 'text',
  onChange = val => {},
  className = '',
  ...props
}: Props) => {
  // Update the buffer value when the textfield is updated
  const onUpdate = e => {
    onChange(e.target.value);
  };
  const classes = useStyles();
  return (
    <TextField
      select
      label={label}
      value={value}
      error={showError && !!error}
      fullWidth
      onChange={onUpdate}
      margin="normal"
      variant="outlined"
      data-simple-dropdown={label}
      className={classnames('test-simpleDropdown', classes.field, className)}
      {...props}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SimpleDropdown;
