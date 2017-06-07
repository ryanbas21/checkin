import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store/index';
import Head from '../src/components/head/head';
import TeamList from '../src/components/TeamList/TeamList';

const JoinTeam = () =>
  <div>
    <h1>Join One Of The Available Teams</h1>
    <TeamList />
  </div>;

export default withRedux(store)(JoinTeam);
