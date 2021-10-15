import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account } from '../common/interfaces';
import { CreateAccountDto } from '../common/dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel('Account')
    private readonly accountModel: Model<Account>,
  ) {}

  async getAccount(email: string): Promise<Account> {
    const account: Account = await this.accountModel.findOne({
      email: email,
    });
    return account;
  }

  async createAccount(accountInfo: CreateAccountDto): Promise<Account> {
    const newAccount = new this.accountModel(accountInfo);
    console.log('AccountService(): createAccount: ' + accountInfo.email);
    return newAccount.save();
  }

  async updateAccount(): Promise<any> {
    console.log('AccountService(): updateAccount');
    return {};
  }

  async deleteAccount(): Promise<any> {
    console.log('AccountService(): deleteAccount');
    return {};
  }

  async findOne(email: string): Promise<Account> {
    return this.accountModel.findOne({ email });
  }
}
