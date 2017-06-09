import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MobileTearSheet from '../MobileTearSheet/MobileTearSheet';
import CheckedInDisplay from './CheckedInDisplay';
import NoActivityMessage from './NoActivityMessage';

const style = {
  paper: {
    marginTop: 120,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
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

const TeamStatus = props =>
  props.status.length
    ? <Paper style={style.paper}>
      <List style={style.list}>
        <Subheader>Activity</Subheader>
        {props.status.map(checkin => <CheckedInDisplay key={checkin.id} checkin={checkin} />)}
      </List>
    </Paper>
    : <NoActivityMessage style={style.paper} />;
export default TeamStatus;
