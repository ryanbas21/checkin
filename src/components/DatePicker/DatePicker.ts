import * as React from 'react';
import DatePicker from 'material-ui/DatePicker';
import CalendarIcon from 'react-icons/lib/go/calendar';

const style = {
  underline: {
    textDecoration: 'none',
  },
};

export interface DateProps {
  currentDate: Date,
  formatDate: Date => Date,
  onChange: () => void,
}
const DatePickerComponent: React.SFC<DateProps> = props =>
  <DatePicker
    defaultDate={props.currentDate}
    floatingLabelText="Date"
    autoOk
    formatDate={props.formatDate}
    underlineShow={false}
    style={style.underline}
    hintText="Select Checkin Date"
    onChange={props.onChange}
    icon={<CalendarIcon />}
  />;

export default DatePickerComponent;
