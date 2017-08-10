import * as React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};
export interface CreateTeamProps {}

const CreateTeam: React.SFC<CreateTeamProps> = (props) =>
  <Paper zDepth={2}>
    <TextField hintText="Team Name" style={style} underlineShow={false} />
    <Divider />
  </Paper>;

export default CreateTeam;
