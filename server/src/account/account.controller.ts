import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Account } from '../common/interfaces/account.interface';
import { AccountService } from './account.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth-guard';
import { CreateAccountDto } from '../common/dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get')
  async getAccount(email: string): Promise<Account> {
    console.log('AccountController(): getAccount');
    return await this.accountService.getAccount(email);
  }

  @Post('create')
  async createAccount(@Body() accountInfo: CreateAccountDto): Promise<Account> {
    console.log('AccountController(): createAccount');
    return await this.accountService.createAccount(accountInfo);
  }

  @Put('update')
  updateAccount(): any {
    console.log('AccountController(): updateAccount');
    return this.accountService.updateAccount();
  }

  @Delete('delete')
  deleteAccount(): any {
    console.log('AccountController(): deleteAccount');
    return this.accountService.deleteAccount();
  }
}
