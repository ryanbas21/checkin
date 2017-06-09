import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar/Avatar';
import UserIcon from 'react-icons/lib/fa/user';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';

const CheckedInDisplay = ({ checkin }) =>
  <ListItem
    key={checkin.id}
    leftAvatar={<Avatar icon={<UserIcon />} />}
    primaryText={checkin.today}
    secondaryText={
      <p>
        <span style={{ color: darkBlack }}>{checkin.date.toString()}</span> --
        {checkin.recentWork}
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
  }).isRequired
};
export default CheckedInDisplay;
