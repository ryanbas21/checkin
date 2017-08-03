import R from 'ramda';
import cuid from 'cuid';
import autodux from 'autodux';

const keyedObjToArray = obj => R.compose(R.map(item => obj[item]), R.keys)(obj);

const checkins = autodux({
  slice: 'checkins',
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
    getCheckins: keyedObjToArray,
  },
});

const { reducer, actions: { addCheckin }, selectors: { getCheckins } } = checkins;

export default reducer;
export { addCheckin, getCheckins };
