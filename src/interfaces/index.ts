export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(password: string): boolean;
}
