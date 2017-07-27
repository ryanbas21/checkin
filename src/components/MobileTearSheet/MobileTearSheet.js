import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    marginBottom: 24,
    marginRight: 24,
    maxWidth: 360,
    width: '100%',
  },
  container: {
    border: 'solid 1px #d9d9d9',
    borderBottom: 'none',
    height: this.props.height,
    overflow: 'hidden',
  },
  bottomTear: {
    display: 'block',
    position: 'relative',
    marginTop: -10,
    maxWidth: 360,
  },
};

const MobileTearSheet = (props, { prepareStyles }) =>
  <div style={prepareStyles(styles.root)}>
    <div style={prepareStyles(styles.container)}>
      {props.children}
    </div>
    <img style={prepareStyles(styles.bottomTear)} src="/static/bottomtear.svg" />
  </div>;

export default MobileTearSheet;

MobileTearSheet.propTypes = {
  children: PropTypes.node.isRequired,
};
MobileTearSheet.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
