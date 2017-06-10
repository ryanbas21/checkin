import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import LogoGithub from 'react-icons/lib/go/mark-github';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import withMuiTheme from '../src/components/MaterialHOC/index';

const style = {
  width: 120,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  verticalAlign: 'center'
};
export default withMuiTheme(props =>
  <div>
    <Paper style={style} zDepth={3}>
      <FlatButton target="_blank" label="Sign In" icon={<LogoGithub />} />
    </Paper>
  </div>
);
