export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string
  password?: string
  token?: string
}

export default interface IResponse {
  error: boolean;
  message: string;
  user?: IUser;
  token?: string
  status: number;
}