import firebase from 'firebase';

// const db = firebase.database();

export const saveTeam = team => {
  console.log(team);
  const { teamID, uid } = team;
  // db().ref(`/${uid}/teams/${teamID}/`).update({ ...team });
};
