import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import CalendarIcon from 'react-icons/lib/go/calendar';

const style = {
  underline: {
    textDecoration: 'none'
  }
};

export default function DatePickerComponent(props) {
  return (
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
    />
  );
}

DatePickerComponent.propTypes = {
  currentDate: PropTypes.number.isRequired,
  formatDate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
