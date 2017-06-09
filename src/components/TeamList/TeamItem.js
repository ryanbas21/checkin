import React from 'react';
import Link from 'next/link';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DefaultAvatar from 'react-icons/lib/go/jersey';
import cuid from 'cuid';

const fakeTeams = [
  { name: 'team green', img: '', id: cuid() },
  { name: 'team red', img: '', id: cuid() },
  { name: 'team blue', img: '', id: cuid() }
];

export default props =>
  <div>
    {fakeTeams.map(team =>
      <Link href={`/teams/${team.id}`}>
        <ListItem
          value={2}
          primaryText={team.name}
          leftAvatar={<Avatar src={team.img || ''} icon={team.img ? '' : <DefaultAvatar />} />}
        />
      </Link>
    )}
  </div>;
