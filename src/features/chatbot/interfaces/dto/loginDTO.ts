export interface ILoginResponse {
  data: Data;
}

export interface Data {
  refresh: string;
  access: string;
  user: User;
  room: Room;
}

export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface Room {
  id: string;
  name: string;
}
