import { Injectable } from '@nestjs/common';

export const HEALTH_MESSAGE = 'OK';

@Injectable()
export class AppService {
  getHealthMessage(): string {
    return HEALTH_MESSAGE;
  }
}
