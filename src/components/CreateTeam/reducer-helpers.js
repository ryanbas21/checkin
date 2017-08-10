import R from 'ramda';
import moment from 'moment';
import Action from 'redux';
import { Team } from '../../global-types/index.ts';

export const sortByTime: boolean = (a, b) => moment(b.date).diff(moment(a.date));
export const filterTeamsById: Action => Team => boolean = action => team =>
  team.teamID === action.payload;
