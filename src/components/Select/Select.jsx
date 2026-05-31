import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as SelectMUI,
  MenuItem,
} from "@mui/material";

const Select = (props) => {
  const {
    options,
    label,
    input: { onChange, value, name },
    meta,
    disabled,
  } = props;
  const error = meta.touched && meta.error;
  const labelId = `${name}-label`;
  const selectId = `${name}-select`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId} htmlFor={selectId}>{label}</InputLabel>
      <SelectMUI
        labelId={labelId}
        id={selectId}
        error={!!error}
        label={label}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </SelectMUI>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
