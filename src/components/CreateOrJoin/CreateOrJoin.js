import React from 'react';
import Link from 'next/link';
import AddTeamIcon from 'react-icons/lib/md/group-add';
import JoinTeamIcon from 'react-icons/lib/ti/group-outline';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import MobileTearSheet from '../MobileTearSheet/MobileTearSheet';

const style = {
  inline: {
    display: 'inline-block',
  },
  icon: {
    margin: 20,
    width: 100,
    textAlign: 'center',
    display: 'inline-block',
  },
  a: {
    textDecoration: 'none',
  },
};
const dividerStyle = { marginTop: 20, marginBottom: 20 };

const CreateOrJoin = props =>
  <MobileTearSheet>
    <div className={style.inline} onClick={() => props.actions.addTeam({ uid: props.teams.uid })}>
      <Link href="/teams/create">
        <a style={style.a}>
          <AddTeamIcon style={style.icon} />Add Team
        </a>
      </Link>
    </div>
    <Divider style={dividerStyle} />
    <div className={style.inline}>
      <Link href="/teams/join">
        <a style={style.a}>
          <JoinTeamIcon style={style.icon} />Join Existing Team
        </a>
      </Link>
    </div>
  </MobileTearSheet>;

export default CreateOrJoin;
