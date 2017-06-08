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
test('should test create team reducer and actions', nest => {
  nest.test('Should test the createTeam action', t => {
    const expected = {
      type: 'CREATE_TEAM',
      payload: 'Team Cool'
    };
    const actual = actions.createTeam('Team Cool');

    t.same(actual, expected, 'should create an action with type and payload');
    t.end();
  });
  nest.test('Should test the selectTeam action', t => {
    const expected = {
      type: 'SELECT_TEAM',
      payload: 'Team Cool'
    };
    const actual = actions.selectTeam('Team Cool');

    t.same(actual, expected, 'should create a select team action creator');
    t.end();
  });
});
