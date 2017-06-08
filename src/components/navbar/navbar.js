import React from 'react';
import { LeftNav, MenuItem } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  console.log('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer'
  },
  nav: {
    position: 'fixed',
    top: 0,
    zIndex: 10000,
    width: '100%',
    left: 0
  }
};

const Navbar = props =>
  <AppBar
    style={styles.nav}
    showMenuIconButton={false}
    title={<span style={styles.title}>{`${props.teamName} Board`}</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Sign Out" />}
  />;

export default Navbar;
