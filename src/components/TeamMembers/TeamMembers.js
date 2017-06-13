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
  toggle: {
    width: 50,
    marginTop: 80,
    right: 0,
    zIndex: 10000,
    thumbOff: {
      backgroundColor: '#ffcccc'
    },
    trackOff: {
      backgroundColor: '#ff9d9d'
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d'
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
      <div>
        <Toggle style={styles.toggle} onToggle={this.handleToggle} icon={ToggleOn} x />
        <Drawer open containerStyle={{ marginTop: 65 }} open={this.state.open} docked>
          <MenuItem style={{ textAlign: 'center' }}>Members</MenuItem>
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
