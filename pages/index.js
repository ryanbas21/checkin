import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import Checkin from '../src/components/checkin/container';
import TeamMembers from '../src/components/TeamMembers/TeamMembers';
import TeamStatus from '../src/components/TeamStatus/container';
import authedPageWrapper from '../src/components/MaterialHOC/index';

const Board = () =>
  <div>
    <TeamMembers />
    <Navbar team={"Ryan's Team"} />
    <TeamStatus />
    <Checkin />
  </div>;

export default authedPageWrapper(Board);
