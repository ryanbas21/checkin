import R from 'ramda';
import moment from 'moment';

export const sortByTime = (a, b) => moment(b.date).diff(moment(a.date));
export const addCheckinCallback = action => team =>
  team.teamID === action.payload.teamID
    ? { ...team, checkIns: [...team.checkIns, action.payload] }
    : team;
