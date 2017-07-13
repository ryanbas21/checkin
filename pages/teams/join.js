import React from 'react';
import authedPageWrapper from '../../src/components/MaterialHOC/index';
import TeamList from '../../src/components/TeamList/TeamList';

const JoinTeam = () =>
  <div>
    <h1>My Teams</h1>
    <TeamList />
  </div>;

export default authedPageWrapper(JoinTeam);
