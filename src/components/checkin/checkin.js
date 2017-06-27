import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddButton from '../AddButton/AddButton';
import DateCheckinPicker from '../DatePicker/DatePicker';

const style = {
  marginRight: 20,
  checkIn: {
    position: 'absolute',
    bottom: 30,
    right: 0
  }
};

export default class CheckIn extends Component {
  state = {
    open: false,
    checkIn: {
      date: moment().format('l')
    }
  };
  getDate = (e, date) => {
    const todaysDate = moment(date).format('l');
    this.setState({
      checkIn: {
        ...this.state.checkin,
        date: todaysDate
      }
    });
  };
  getToday = e => {
    const todaysWork = e.target.value;
    this.setState({
      ...this.state,
      checkIn: {
        ...this.state.checkIn,
        today: todaysWork
      }
    });
  };
  getRecent = e => {
    const recentWork = e.target.value;
    this.setState({
      ...this.state,
      checkIn: {
        ...this.state.checkIn,
        recentWork
      }
    });
  };
  getBlockers = e => {
    const blockers = e.target.value;
    this.setState({
      ...this.state,
      checkIn: {
        ...this.state.checkIn,
        questions: blockers
      }
    });
  };
  formatDate = date => moment(date).format('l');
  submitForm = e => {
    this.props.actions.addCheckIn(this.state.checkIn);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  render() {
    const actions = [
      <FlatButton label="Cancel" primary onTouchTap={this.handleClose} />,
      <FlatButton label="Submit" primary onTouchTap={this.handleClose} onClick={this.submitForm} />
    ];
    return (
      <div style={style.checkIn}>
        <AddButton action={this.handleOpen} label={'Check In'} />
        <Dialog title="Check In!" actions={actions} modal open={this.state.open}>
          <DateCheckinPicker formatDate={this.formatDate} onChange={this.getDate} />
          <Divider />
          <TextField
            floatingLabelText="Yesterday/Recent Work"
            style={style}
            underlineShow={false}
            multiLine
            onChange={this.getRecent}
          />
          <Divider />
          <TextField
            onChange={this.getToday}
            floatingLabelText="Today"
            underlineShow={false}
            multiLine
          />
          <Divider />
          <TextField
            onChange={this.getBlockers}
            multiLine
            floatingLabelText={'Questions/Blockers'}
            style={style}
            underlineShow={false}
          />
          <Divider />
        </Dialog>
      </div>
    );
  }
}

CheckIn.propTypes = {
  actions: PropTypes.shape({
    addCheckIn: PropTypes.func.isRequired
  }).isRequired
};
