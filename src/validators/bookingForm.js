import dayjs from "dayjs";

const validate = {
  required: (value) => (value ? undefined : 'Required'),
  checkOutAfterCheckIn: (checkIn) => (checkOut) => {
    if (!checkOut) return 'Required';
    if (checkIn && dayjs(checkOut).isBefore(dayjs(checkIn), 'day')) return 'Must be after check-in';
    if (checkIn && dayjs(checkOut).isSame(dayjs(checkIn), 'day')) return 'Must differ from check-in';
    return undefined;
  },
};

export default validate;
