import R from 'ramda';
import cuid from 'cuid';
import autodux from 'autodux';

// TODO
const getCheckinsSelector = state => R.compose(R.map(item => state[item]), R.keys)(state);

const checkins = autodux({
  slice: 'Checkins',
  initial: {},
  actions: {
    addCheckin: {
      create: (
        {
          date = Date.now(),
          today = '',
          recentWork = '',
          questions = '',
          id = cuid(),
          userID = cuid(),
          teamID = undefined,
        } = {},
      ) => ({ date, today, recentWork, questions, userID, teamID, id }),
      reducer: (state, payload) => ({ ...state, [payload.id]: payload }),
    },
  },
  selectors: {
    getCheckins: state => state,
  },
});

const { reducer, actions: { addCheckin }, selectors: { getCheckins } } = checkins;

export default reducer;
export { addCheckin, getCheckinsSelector };

/*
export const addCheckIn = ({
  date = Date.now(),
  today = '',
  recentWork = '',
  questions = '',
  id = cuid(),
  userID = cuid(),
  teamID = undefined,
})
*/
