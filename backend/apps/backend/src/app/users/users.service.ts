import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(email: string, hashedPassword: string): Promise<User> {
    const newUser = new this.userModel({ email, password: hashedPassword });
    return newUser.save();
  }

  async setResetToken(email: string, token: string, expiry: Date) {
    return this.userModel.updateOne({ email }, { resetToken: token, resetTokenExpiry: expiry });
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.userModel.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() },
    });

    if (!user) return null;

    user.password = newPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;

    await user.save();
    return user;
  }

  async findAll() {
    return this.userModel.find().select('-password -resetToken -resetTokenExpiry');
  }
}

