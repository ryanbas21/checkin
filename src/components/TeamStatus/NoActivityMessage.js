import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NoActivityMessage = props =>
  <Card style={props.style}>
    <CardHeader title="No Recent Activity" subtitle="Checkin your activity!" />
  </Card>;

const { number, string } = PropTypes;
// NoActivityMessage.propTypes = {
//   style: PropTypes.shape({
//     width: number.isRequired,
//     display: string.isRequired,
//     flexDirection: string.isRequired,
//     justifyContent: string.isRequired,
//     alignItems: string.isRequired
//   }).isRequired
// };
export default NoActivityMessage;
