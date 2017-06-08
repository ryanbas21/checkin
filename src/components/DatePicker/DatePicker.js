import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import CalendarIcon from 'react-icons/lib/go/calendar';

const style = {
  underline: {
    textDecoration: 'none'
  }
};
/**
 * `DatePicker` can be implemented as a controlled input,
 * where `value` is handled by state in the parent component.
 */
export default class CheckinDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date
    });
  };

  render() {
    return (
      <DatePicker
        floatingLabelText="Date"
        autoOk
        underlineShow={false}
        style={style.underline}
        hintText="Select Checkin Date"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        icon={CalendarIcon}
      />
    );
  }
}
