import R from 'ramda';

export const displayCheckin = R.compose(R.join(''), R.slice(0, 25), R.split(''));
export const displayRecentWork = R.compose(R.join(''), R.slice(0, 10), R.split(''));
