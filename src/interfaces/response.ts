export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string
  password?: string
  token?: string
}
export interface IPost {
  message?: string,
  date: Date
  image?: string
}

export default interface IResponse {
  error: boolean;
  message: string;
  user?: IUser;
  post?: IPost
  posts?: IPost[]
  token?: string
  status: number;
}