import * as mongoose from 'mongoose';
import { isEmail } from 'validator';

export const AccountSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'invalid email'],
  },
  password: { type: String, required: true },
  photo: { type: String },
  isVerified: { type: Boolean },
});
