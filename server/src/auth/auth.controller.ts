import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Request() req, @Res() response: Response) {
    const token = await this.authService.login(req.user);
    console.log('AuthController(): login... token: ' + token);
    return response
      .cookie('access_token', token, {
        httpOnly: true,
        domain: 'localhost',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      })
      .send({ success: true });
  }

  @HttpCode(200)
  @Get('logout')
  async logout(@Res() response: Response) {
    console.log('AuthController(): logout');
    return response
      .cookie('access_token', null, {
        httpOnly: true,
        domain: 'localhost',
      })
      .send('Logged out');
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkToken')
  checkToken(@Request() req) {
    console.log('AuthController(): checkToken');
    return req.user;
  }
}
