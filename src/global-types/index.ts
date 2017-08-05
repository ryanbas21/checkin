import * as cuid from 'cuid';

export interface GlobalState {
  board: {
    teams: Team[];
    currentTeam: string;
  };
  checkins: Checkins;
  userInfo: UserInfo;
}
export interface UserInfo {
  userData: UserData;
}
export interface UserData {
  uid: string;
}
export interface Admin {
  name: string;
  uid: string;
}
export interface Team {
  checkins: Checkins;
  admin: Admin;
  teamID: string;
}
export interface Checkins {
  date: Date;
  today: string;
  recentWork: string;
  questions: string;
  id: string;
  userID: string;
  teamID: string;
}