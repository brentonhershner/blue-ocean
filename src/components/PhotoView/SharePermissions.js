import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SharePermissions() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Who can see?</FormLabel>
      <RadioGroup aria-label="permissions" name="permissions1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Everyone" />
        <FormControlLabel value="male" control={<Radio />} label="My Friends" />
        <FormControlLabel value="other" control={<Radio />} label="Only Me" />
      </RadioGroup>
    </FormControl>
  );
}