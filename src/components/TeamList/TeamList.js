import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MobileTearSheet from '../MobileTearSheet/MobileTearSheet';
import TeamItem from './TeamItem';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index
      });
    };

    render() {
      return (
        <ComposedComponent value={this.state.selectedIndex} onChange={this.handleRequestChange}>
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);
const TeamList = () =>
  <MobileTearSheet>
    <SelectableList defaultValue={3}>
      <Subheader>Teams Available</Subheader>
      <TeamItem />
    </SelectableList>
  </MobileTearSheet>;

export default TeamItem;
