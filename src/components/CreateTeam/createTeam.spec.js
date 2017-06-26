import cuid from 'cuid';
import test from 'tape';
import reducer, * as actions from './createTeam.reducer.js';

const createCheckinFactory = (
  {
    date = Date.now(),
    today = 'Today',
    recentWork = 'Recent',
    questions = 'Questions',
    id = cuid(),
    teamID = cuid(),
    userID = cuid()
  } = {}
) => ({
  date,
  today,
  recentWork,
  questions,
  id,
  teamID,
  userID
});

test('Should test the selectTeam selector', t => {
  const state = {
    teams: ['Team cool', 'Team Red', 'Team Blue', 'Team Grey', 'Team Team']
  };
  const actual = actions.createOrJoinSelector(state);
  const expected = state.teams;
  t.same(actual, expected, 'Should slice off the correct piece of state');
  t.end();
});

test('Test the getCheckins Selector', t => {
  const msg = 'Should slice off the checkins from the selected team';
  const teamID = cuid();
  const adminID = cuid();
  const state = {
    teams: [
      {
        teamName: 'Blue',
        teamID,
        teamAdmin: {
          admin: 'Ryan',
          id: adminID
        },
        checkIns: [teamData]
      }
    ]
  };
  const expected = [teamData];
  const actual = actions.getCheckins(state);
  t.same(actual, expected, 'Should create an array of checkins');
  t.end();
});

test('Create Team Reducer', nest => {
  nest.test('Add Checkin Case', t => {
    const checkInID = cuid();
    const userID = cuid();
    const teamID = cuid();
    const action = actions.addCheckIn({
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID,
      teamID
    });
    const adminID = cuid();
    const state = {
      teams: [
        {
          teamName: 'Blue',
          teamID,
          teamAdmin: {
            admin: 'Ryan',
            id: adminID
          },
          checkIns: []
        }
      ]
    };
    const actual = reducer(state, action);
    const expected = {
      teams: [
        {
          teamName: 'Blue',
          teamID,
          teamAdmin: {
            admin: 'Ryan',
            id: adminID
          },
          checkIns: [action.payload]
        }
      ]
    };

    t.same(actual, expected, 'Should Add A Checkin to state');
    t.end();
  });

  nest.test('Add_Team case', t => {
    const msg = 'Should Test adding a team to state';
    const state = {
      teams: []
    };
    const action = actions.addTeam('Red');
    const expected = { teams: [{ teamID: action.payload.teamID, name: 'Red' }] };
    const actual = reducer(state, action);

    t.same(actual, expected, msg);
    t.end();
  });
});
