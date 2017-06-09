import cuid from 'cuid';
import test from 'tape';
import reducer, * as actions from './createTeam.reducer.js';

test('Should test the selectTeam selector', t => {
  const state = {
    teams: ['Team cool', 'Team Red', 'Team Blue', 'Team Grey', 'Team Team']
  };
  const actual = actions.createOrJoinSelector(state);
  const expected = state.teams;
  t.same(actual, expected, 'Should slice off the correct piece of state');
  t.end();
});
test('Test the getTeamStatus Selector', t => {
  const checkInID = cuid();
  const userID = cuid();
  const state = {
    [checkInID]: {
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID
    },
    [userID]: {
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID
    }
  };
  const expected = [
    {
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID
    },
    {
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID
    }
  ];
  const actual = actions.getTeamStatus(state);

  t.same(actual, expected, 'Should create an array of checkins');
  t.end();
});

test('Create Team Reducer', nest => {
  nest.test('Add Checkin Case', t => {
    const checkInID = cuid();
    const userID = cuid();
    const action = actions.addCheckIn({
      date: '1/1/2017',
      recentWork: 'Worked on scrum app',
      questions: 'When will the backend be ready',
      today: 'Wrote tests for create team reducer',
      id: checkInID,
      userID
    });
    const state = {};
    const actual = reducer(state, action);
    const expected = {
      [checkInID]: {
        date: '1/1/2017',
        recentWork: 'Worked on scrum app',
        questions: 'When will the backend be ready',
        today: 'Wrote tests for create team reducer',
        id: checkInID,
        userID
      }
    };
    t.same(actual, expected, 'Should Add A Checkin to state');
    t.end();
  });
});
