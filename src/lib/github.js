import firebase from 'firebase';

const provider = new firebase.auth.GithubAuthProvider();

export const getGithubLogin = () => firebase.auth().signInWithPopup(provider);
export function signoutGithub() {}
