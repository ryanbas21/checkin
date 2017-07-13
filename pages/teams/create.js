import React from 'react';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import authedPageWrapper from '../../src/components/MaterialHOC/index';
import CreateTeamStepper from '../../src/components/CreateTeam/stepper/container';

const style = {
  height: 600,
  width: 800,
  margin: 20,
  textAlign: 'center',
};
const CreateTeam = props =>
  <div>
    <CreateTeamStepper />
  </div>;

export default authedPageWrapper(CreateTeam);
