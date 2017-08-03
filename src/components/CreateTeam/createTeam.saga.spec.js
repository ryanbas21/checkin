import test from 'tape';
import cuid from 'cuid';
import { put } from 'redux-saga/effects';
import { addTeamClick, addTeam } from './createTeam.reducer';
import { callAddTeamClick } from './createTeam.saga';

test('Add Team Click Saga', assert => {
  const msg = 'Should put add team action';
  const teamID = cuid();
  const expectedAction = addTeam({ teamID, uid: 1 });
  const action = callAddTeamClick(expectedAction);
  const iterator = callAddTeamClick(action);
  const { value } = iterator.next();
  const actual = value;
  const expected = put(expectedAction);

  assert.same(actual, expected, msg);
  assert.end();
});
