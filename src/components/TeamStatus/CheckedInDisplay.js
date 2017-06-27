import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar/Avatar';
import UserIcon from 'react-icons/lib/fa/user';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';

const CheckedInDisplay = ({ handleOpen, checkin }) =>
  <ListItem
    onTouchTap={handleOpen}
    key={checkin.id}
    leftAvatar={<Avatar icon={<UserIcon />} />}
    primaryText={`${checkin.date.toString()} : ${checkin.today.split('').slice(0, 25).join('')}...`}
    secondaryText={
      <p>
        <span style={{ color: darkBlack }}>{`Recent Work: ${checkin.recentWork
          .split('')
          .slice(0, 10)
          .join('')}...`}</span>
        {' '}--
        {'Click To View More'}
      </p>
    }
    secondaryTextLines={2}
  />;

CheckedInDisplay.propTypes = {
  checkin: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    today: PropTypes.string.isRequired,
    recentWork: PropTypes.string.isRequired,
    questions: PropTypes.string.isRequired
  }).isRequired,
  handleOpen: PropTypes.func.isRequired
};
export default CheckedInDisplay;
