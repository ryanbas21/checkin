import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20
};
export default props =>
  <FloatingActionButton secondary style={style}>
    <ContentAdd />
  </FloatingActionButton>;
