import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule, AppConfigService } from './config';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRootAsync({
      useExisting: AppConfigService,
    }),
    ScheduleModule.forRoot(),
    AccountModule,
    AuthModule,
  ],
})
export class AppModule {}
