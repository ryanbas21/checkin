import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Checkin from '../../components/checkin/container';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import TeamStatus from '../../components/TeamStatus/container';
import authedPageWrapper, { withoutAuth } from '../../components/MaterialHOC/index';

export default () =>
  <div>
    <TeamMembers />
    <Navbar team={"Ryan's Team"} />
    <TeamStatus />
    <Checkin />
  </div>;
