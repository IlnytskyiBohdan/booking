import { string, object, bool } from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DatePicker = (props) => {
  const {
    label,
    disabled,
    input: { onChange, value },
    meta,
    fullWidth,
  } = props;
  const error = meta.touched && meta.error;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        disabled={disabled}
        onChange={onChange}
        value={value || null}
        minDate={dayjs()}
        slotProps={{
          textField: { fullWidth, helperText: error, error: !!error },
        }}
      />
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  label: string,
  disabled: bool,
  input: object,
  meta: object,
  fullWidth: bool,
};

export default DatePicker;
