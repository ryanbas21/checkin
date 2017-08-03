import React, { Component } from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import CheckedInDisplay from './CheckedInDisplay';
import NoActivityMessage from './NoActivityMessage';

const style = {
  outer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flexDirection: 'column',
    width: 300,
    margin: 5,
    textAlign: 'center',
  },
};

class TeamStatus extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Close" primary keyboardFocused onTouchTap={this.handleClose} />,
    ];
    const listOfCheckins = R.compose(R.map(key => this.props.checkins[key]), R.keys)(
      this.props.checkins,
    );
    return (
      <div style={style.outer}>
        {listOfCheckins.length
          ? <Paper style={style.paper}>
            <List style={style.list}>
              <Subheader>Activity</Subheader>
              {R.map(
                  checkin =>
                    <div>
                      <CheckedInDisplay
                        handleOpen={this.handleOpen}
                        key={checkin.id}
                        checkin={checkin}
                      />
                      <Dialog
                        key={`${checkin.id} dialog`}
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
                    </div>,
                  listOfCheckins,
                )}
            </List>
          </Paper>
          : <NoActivityMessage style={style.paper} />}
      </div>
    );
  }
}

const { string } = PropTypes;
TeamStatus.propTypes = {
  checkins: PropTypes.shape({
    date: string,
    today: string,
    recentWork: string,
    questions: string,
    id: string,
    userID: string,
    teamID: string,
  }).isRequired,
};
export default TeamStatus;
