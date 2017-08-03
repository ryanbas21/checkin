import cuid from 'cuid';
import R from 'ramda';
import test from 'tape';
import reducer, * as actions from './createTeam.reducer.js';

// Factories
const createCheckinFactory = (
  {
    date = Date.now(),
    today = 'Today',
    recentWork = 'Recent',
    questions = 'Questions',
    id = cuid(),
    teamID = cuid(),
    userID = cuid(),
  } = {},
) => ({
  date,
  today,
  recentWork,
  questions,
  id,
  teamID,
  userID,
});

const createTeamData = (
  {
    teamID = cuid(),
    id = cuid(),
    admin = '',
    teamName = '',
    checkIns = [createCheckinFactory()],
  } = {},
) => ({
  teamName,
  teamID,
  teamAdmin: {
    admin,
    id,
  },
  checkIns,
});
const createUserData = (
  {
    uid = cuid(),
    displayName = 'Ryan Bas',
    photoURL = 'imgur.com/image',
    email = 'ryan.basmajian@parralelldrive.com',
    providerId = 'github.com',
  } = {},
) => ({ uid, displayName, photoURL, email, providerId });

const createUserInfo = (
  { isLoggedIn = false, isFetchingLogin = false, userData = createUserData() } = {},
) => ({ isLoggedIn, isFetchingLogin, userData });

const getState = (
  { userInfo = createUserInfo(), teams = [createTeamData()], currentTeam = undefined } = {},
) => ({ userInfo, board: { teams, currentTeam } });

// Test Suite
test('Should test the selectTeam selector', t => {
  const state = getState();
  const actual = actions.createOrJoinSelector(state);

  const expected = {
    teams: state.board.teams,
    uid: state.userInfo.userData.uid,
    current: state.board.current,
  };

  t.same(actual, expected, 'Should slice off the correct piece of state');
  t.end();
});

test('Test the getCheckins Selector', t => {
  const msg = 'Should slice off the checkins from the selected team';
  const teamID = cuid();
  const teamData = createTeamData({ teamID });
  const state = getState({ currentTeam: teamID, teams: [teamData] });
  const expected = state.board.teams[0].checkIns;
  const actual = actions.getCheckins(state, teamID);
  t.same(actual, expected, msg);
  t.end();
});
test('Get Current Team Selector', assert => {
  const msg = 'Should return team by ID';
  const teamID = cuid();
  const teamData = createTeamData({ teamID });
  const state = getState({ currentTeam: teamID, teams: [teamData] });
  const actual = actions.currentTeam(state, teamID);
  const expected = state.board.teams[0];

  assert.same(actual, expected, msg);
  assert.end();
});
