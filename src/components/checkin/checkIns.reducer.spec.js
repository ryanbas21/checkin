import R from 'ramda';
import test from 'tape';
import cuid from 'cuid';
import reducer, { addCheckin, getCheckinsSelector as getCheckins } from './checkIns.reducer';

const getState = (state = {}) => state;

test('Checkin Selector', assert => {
  const msg = 'Should produce an array of checkins';
  const state = getState({ [cuid()]: { today: 'Hello' }, [cuid()]: { today: 'Hey' } });
  const expected = [{ today: 'Hello' }, { today: 'Hey' }];
  const actual = getCheckins(state);

  assert.same(actual, expected, msg);
  assert.end();
});
test('checkinReducer initial state', assert => {
  const msg = 'should produce valid initial state';

  const actual = reducer();
  const expected = getState();

  assert.same(actual, expected, msg);
  assert.end();
});

test('Add Checkin Case', t => {
  const msg = 'Should add a checkin to the team';
  const action = addCheckin();
  const checkin = action.payload;

  const actual = reducer(undefined, action);
  const expected = getState({
    [checkin.id]: checkin,
  });

  t.same(actual, expected, msg);
  t.end();
});
