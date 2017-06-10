'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Avatar = require('material-ui/Avatar/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CheckedInDisplay = function CheckedInDisplay(_ref) {
  var handleOpen = _ref.handleOpen,
      checkin = _ref.checkin;
  return _react2.default.createElement(_ListItem2.default, {
    onTouchTap: handleOpen,
    key: checkin.id,
    leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_user2.default, null) }),
    primaryText: checkin.date.toString() + ' : ' + checkin.today.split('').slice(0, 25).join('') + '...',
    secondaryText: _react2.default.createElement('p', null, _react2.default.createElement('span', { style: { color: _colors.darkBlack } }, 'Recent Work: ' + checkin.recentWork.split('').slice(0, 10).join('') + '...'), ' ', '--', 'Click To View More'),
    secondaryTextLines: 2
  });
};

CheckedInDisplay.propTypes = {
  checkin: _propTypes2.default.shape({
    date: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    recentWork: _propTypes2.default.string.isRequired,
    questions: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = CheckedInDisplay;