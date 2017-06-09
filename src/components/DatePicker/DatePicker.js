import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import CalendarIcon from 'react-icons/lib/go/calendar';

const style = {
  underline: {
    textDecoration: 'none'
  }
};

export default function (props) {
  return (
    <DatePicker
      floatingLabelText="Date"
      autoOk
      formatDate={props.formatDate}
      underlineShow={false}
      style={style.underline}
      hintText="Select Checkin Date"
      onChange={props.onChange}
      icon={<CalendarIcon />}
    />
  );
}
