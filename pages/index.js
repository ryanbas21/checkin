import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import Checkin from '../src/components/checkin/container';
import TeamMembers from '../src/components/TeamMembers/TeamMembers';
import TeamStatus from '../src/components/TeamStatus/container';
import withMUITheme from '../src/components/MaterialHOC/index';
import CheckLogin from '../src/components/login/LoggedInHOC/index';

const Board = () =>
  <div>
    <TeamMembers />
    <Navbar team={"Ryan's Team"} />
    <TeamStatus />
    <Checkin />
  </div>;

export default CheckLogin(withMUITheme(Board));
