import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MobileTearSheet from '../MobileTearSheet/MobileTearSheet';
import CheckedInDisplay from './CheckedInDisplay';
import NoActivityMessage from './NoActivityMessage';

const style = {
  outer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flexDirection: 'column',
    width: 300,
    margin: 5,
    textAlign: 'center'
  }
};

class TeamStatus extends Component {
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
      <FlatButton label="Close" primary keyboardFocused onTouchTap={this.handleClose} />
    ];
    return (
      <div style={style.outer}>
        {this.props.status.length
          ? <Paper style={style.paper}>
            <List style={style.list}>
              <Subheader>Activity</Subheader>
              {this.props.status.map(checkin =>
                <div>
                  {/* <CheckedInDisplay
                    handleOpen={this.handleOpen}
                    key={checkin.id}
                    checkin={checkin}
                  /> */}
                  <Dialog
                    key={`${checkin.id}dialog`}
                    title={checkin.today}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    <p>recent work : {checkin.recentWork}</p>
                    <p>Todays work : {checkin.today}</p>
                    <p>blockers : {checkin.questions}</p>
                  </Dialog>
                </div>
                )}
            </List>
          </Paper>
          : <NoActivityMessage style={style.paper} />}
      </div>
    );
  }
}

TeamStatus.propTypes = {
  status: PropTypes.array.isRequired
};
export default TeamStatus;
