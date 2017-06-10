import React from 'react';
import Paper from 'material-ui/Paper';
import withRedux from 'next-redux-wrapper';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../../src/store/index';

const style = {
  height: 600,
  width: 800,
  margin: 20,
  textAlign: 'center'
};
const muiTheme = getMuiTheme({
  userAgent: false
});

class CreateTeam extends React.Component {
  state = {
    finished: false,
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label={stepIndex === 1 ? 'Finish' : 'Next'}
          disableTouchRipple
          disableFocusRipple
          primary
          onTouchTap={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 &&
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple
            disableFocusRipple
            onTouchTap={this.handlePrev}
          />}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <MuiThemeProvider theme={muiTheme}>

        <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
              <StepLabel>Create Your Scrum Team</StepLabel>
              <StepContent>
                <TextField hintText="Team Name" errorText="This field is required" />
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Invite Teammates</StepLabel>
              <StepContent>
                <Subheader>Or Hit Next to skip</Subheader>
                <TextField hintText="Enter Email" errorText="" />
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
          </Stepper>
          {finished &&
            <p style={{ margin: '20px 0', textAlign: 'center' }}>
              <a
                href="#"
                onClick={event => {
                  event.preventDefault();
                  this.setState({ stepIndex: 0, finished: false });
                }}
              >
                Click here
              </a>
              {' '}
              to reset the example.
            </p>}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withRedux(store)(CreateTeam);
