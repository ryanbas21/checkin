import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import UserIcon from 'react-icons/lib/fa/user';

const styles = {
  sideNav: {
    position: 'relative',
    top: 200
  }
};
const Names = ['Ryan', 'Eric', 'John', 'Mike', 'George', 'Casey', 'Greg'];

export default ({ photoURL = <FontIcon className="material-icons">home</FontIcon> }) =>
  <Drawer openSecondary style={styles.sideNav}>
    <MenuItem />
    <MenuItem />
    <MenuItem style={{ textAlign: 'center' }}>Members</MenuItem>
    {Names.map(name =>
      <MenuItem key={name} style={{ paddingLeft: 10 }}>
        <Avatar icon={<UserIcon />} style={{ margin: 5 }} />{name}
      </MenuItem>
    )}
  </Drawer>;
