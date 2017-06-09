import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import UserIcon from 'react-icons/lib/fa/user';
import ToggleOff from 'react-icons/lib/fa/toggle-off';
import ToggleOn from 'react-icons/lib/fa/toggle-on';

const styles = {
  sideNav: {
    marginTop: 600
  },
  toggle: {
    block: {
      maxWidth: 250
    },
    toggle: {
      marginBottom: 16
    },
    thumbOff: {
      backgroundColor: '#ffcccc'
    },
    trackOff: {
      backgroundColor: '#ff9d9d'
    },
    thumbSwitched: {
      backgroundColor: 'red'
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d'
    },
    labelStyle: {
      color: 'red'
    }
  }
};
const Names = ['Ryan', 'Eric', 'John', 'Mike', 'George', 'Casey', 'Greg'];

export default class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div style={{ float: 'right' }}>
        <Toggle
          defaultToggled={!!this.state.open}
          onToggle={this.handleToggle}
          icon={ToggleOn}
          style={{ position: 'relative', marginTop: '0%', left: '10%' }}
        />
        <Drawer openSecondary style={styles.sideNav} open={this.state.open} docked>
          <br />
          <MenuItem style={{ textAlign: 'center' }}>Members</MenuItem>
          <Toggle
            style={styles.toggle}
            onToggle={this.handleToggle}
            icon={ToggleOn}
            defaultToggled
          />
          {Names.map(name =>
            <MenuItem key={name} style={{ paddingLeft: 10 }}>
              <Avatar icon={<UserIcon />} style={{ margin: 5 }} />{name}
            </MenuItem>
          )}
        </Drawer>
      </div>
    );
  }
}
TeamMembers.defaultProps = {
  photoURL: <FontIcon className="material-icons" />
};
