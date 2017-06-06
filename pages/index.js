import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../src/store/index';
import Head from '../src/components/head/head';

const Index = () => <div>Welcome to next.js</div>;

export default withRedux(store)(Index);
