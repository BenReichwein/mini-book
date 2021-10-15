/* eslint-disable class-methods-use-this */
import { Injectable, Dependencies } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
@Dependencies(ConfigService)
export class AppConfigService {
  constructor(private configService: ConfigService) {
    this.configService = configService;
  }

  async createBullOptions() {
    return {
      defaultJobOptions: {
        attempts: 5,
        backoff: 5000,
        removeOnComplete: true,
      },
      redis: {
        host: this.configService.get('QUEUE_HOST', 'localhost'),
        port: +this.configService.get('QUEUE_PORT', 6379),
        password: this.configService.get('QUEUE_PASSWORD'),
      },
    };
  }

  async createMongooseOptions() {
    return {
      uri: this.configService.get('MONGO'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
