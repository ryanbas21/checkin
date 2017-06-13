import React from 'react';
import GithubLogo from 'react-icons/lib/go/logo-github';
import LogoGithub from 'react-icons/lib/go/mark-github';

export default () =>
  <div style={{ width: 200, height: 80 }}>
    <LogoGithub style={{ width: 30, height: 30 }} />{' '}
    <GithubLogo style={{ width: 30, height: 30 }} />
  </div>;
