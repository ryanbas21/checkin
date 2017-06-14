import test from 'tape';
import cuid from 'cuid';
import { call, put, fork } from 'redux-saga/effects';
import LoginReducer, * as actions from './signin-reducer';
import * as login from './signin.saga';
import { getGithubLogin } from '../../lib/github';

test('Get User State Selector', t => {
  const msg = 'Should slice off the User state';
  const checkInID = cuid();
  const userID = cuid();
  const state = {
    userInfo: {
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
test('Get Auth', t => {
  const msg = 'Should return boolean of logged in or not';
  const state = { isLoggedIn: true };
  const actual = actions.getAuthState(state);
  const expected = true;

  t.same(actual, expected, msg);
  t.end();
});
test('Should Test The Signin Reducer', nest => {
  nest.test('Login Saga', t => {
    t.test('Start Login dispatched', assert => {
      const msg = 'Should dispatch a start login action type';
      const gen = login.callIsFetchingLogin(actions.startLogin());
      const actual = gen.next().value;
      const expected = put({ type: 'IS_FETCHING_LOGIN' });

      assert.same(actual, expected, msg);
      assert.end();
    });
    t.test('Github Login', assert => {
      const msg = 'Should call the Github Worker saga';
      const gen = login.callGithubLogin(actions.isFetchingLogin());
      const actual = gen.next().value;
      const expected = call(getGithubLogin);

      assert.same(actual, expected, msg);
      assert.end();
    });
  });
  nest.test('Login Reducer', t => {
    const createState = () => ({
      userData: {},
      isFetchingLogin: false,
      isLoggedIn: false,
      error: undefined,
      teams: []
    });
    t.test('Is Fetching Login update state', assert => {
      const msg = 'Should update login fetching status';
      const action = actions.isFetchingLogin();
      const state = createState();
      const actual = LoginReducer(state, action);
      const expected = { ...state, isFetchingLogin: true };

      assert.same(actual, expected, msg);
      assert.end();
    });
    t.test('Saves User in state', assert => {
      const msg = 'User on successful login should be saved into state';
      const user = {
        displayName: 'Ryan Bas',
        email: 'ryanbas21@gmail.com',
        photoURL: 'https://avatars1.githubusercontent.com/u/18267769?v=3',
        providerId: 'github.com',
        uid: '18267769'
      };
      const action = actions.loginSuccess(user);
      const state = createState();
      const actual = LoginReducer(state, action);
      const expected = {
        isFetchingLogin: false,
        isLoggedIn: false,
        teams: [],
        error: undefined,
        userData: {
          displayName: 'Ryan Bas',
          email: 'ryanbas21@gmail.com',
          photoURL: 'https://avatars1.githubusercontent.com/u/18267769?v=3',
          providerId: 'github.com',
          uid: '18267769'
        }
      };

      assert.same(actual, expected, msg);
      assert.end();
    });
    t.test('Update isLoggedIn', assert => {
      const msg = 'Should update Is Logged In Boolean';
      const state = createState();
      const action = actions.isLoggedIn();
      const actual = LoginReducer(state, action);
      const expected = { ...state, isLoggedIn: true };

      assert.same(actual, expected, msg);
      assert.end();
    });
    t.test('Login Error', assert => {
      const msg = 'Should update with an error in state if login failed';
      const action = actions.loginError('Error Logging In');
      const state = createState();
      const actual = LoginReducer(state, action);
      const expected = { ...state, error: action.payload, isFetchingLogin: false };

      assert.same(actual, expected, msg);
      assert.end();
    });
  });
});
