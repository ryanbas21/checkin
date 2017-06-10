import React from 'react';
import withRedux from 'next-redux-wrapper';
import CreateOrJoin from '../../src/components/CreateOrJoin/Container';
import withMUITheme from '../../src/components/MaterialHOC/index';

const Teams = props => <CreateOrJoin />;

export default withMUITheme(Teams);
