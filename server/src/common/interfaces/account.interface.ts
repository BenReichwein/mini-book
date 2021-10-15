import { Document } from 'mongoose';

export interface Account extends Document {
  username: string;
  email: string;
  password: string;
  photo: string;
  isVerified: boolean;
}
