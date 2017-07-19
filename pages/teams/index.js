import React from 'react';
import CreateOrJoin from '../../src/components/CreateOrJoin/Container';
import authedPageWrapper from '../../src/components/MaterialHOC/index';

const Teams = props => <CreateOrJoin />;

export default authedPageWrapper(Teams);
