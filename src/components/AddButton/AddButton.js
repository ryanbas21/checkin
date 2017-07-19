import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

const AddButton = props =>
  <FloatingActionButton secondary onTouchTap={props.action} style={style}>
    <ContentAdd />
  </FloatingActionButton>;

export default AddButton;

AddButton.propTypes = {
  action: PropTypes.func.isRequired,
};
