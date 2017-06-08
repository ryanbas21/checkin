import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddButton from '../AddButton/AddButton';
import DateCheckinPicker from '../DatePicker/DatePicker';

const style = {
  marginRight: 20,
  checkIn: {
    position: 'absolute',
    bottom: 150,
    right: 250
  }
};

export default class DialogExampleModal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary onTouchTap={this.handleClose} />,
      <FlatButton label="Submit" primary onTouchTap={this.handleClose} />
    ];

    return (
      <div style={style.checkIn}>
        <AddButton action={this.handleOpen} label={'Check In'} />
        <Dialog title="Check In!" actions={actions} modal open={this.state.open}>
          <DateCheckinPicker />
          <Divider />
          <TextField
            floatingLabelText="Yesterday/Recent Work"
            style={style}
            underlineShow={false}
            multiLine
          />
          <Divider />
          <TextField floatingLabelText="Today" underlineShow={false} multiLine />
          <Divider />
          <TextField
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
