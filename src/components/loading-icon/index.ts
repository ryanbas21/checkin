import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const CircularProgressExampleSimple : React.SFC<void> = () =>
  <div>
    <CircularProgress size={60} thickness={7} />
  </div>;

export default CircularProgressExampleSimple;
