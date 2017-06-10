import test from 'tape';
import cuid from 'cuid';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from './signin-reducer';
import * as login from './signin.saga';

test('Get User State Selector', t => {
  const msg = 'Should slice off the User state';
  const checkInID = cuid();
  const userID = cuid();
  const state = {
    user: {
      name: 'Ryan',
      email: 'ryanbas21@gmail.com',
      id: 1
    },
    createTeamReducer: {
      [checkInID]: {
        date: '1/2/2017',
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
    }
  };
  const actual = actions.getUserState(state);
  const expected = {
    name: 'Ryan',
    email: 'ryanbas21@gmail.com',
    id: 1
  };
  t.same(actual, expected, msg);
  t.end();
});
test('Should Test The Signin Reducer', nest => {
  nest.test('Login Saga', t => {
    t.test('Action Dispatched', assert => {
      const msg = 'Should Dispatch The IS_FETCHINING_LOGIN type';
      const gen = login.callIsFetchingLogin(action);
      const action = actions.isFetchingLogin();
      const actual = gen.next().value;
      const expected = put({ type: 'IS_FETCHING_LOGIN' });

      assert.same(actual, expected, msg);
      assert.end();
    });
    t.test('Github Login', assert => {
      const msg = 'Should Test the github login is called';
      const action = actions.isFetchingLogin();
      const gen = login.callIsFetchingLogin(action);
      const actual = gen.next().value;
      const expected = call(login.getGithubLogin);

      assert.same(actual, expected, msg);
      assert.end();
    });
  });
});
