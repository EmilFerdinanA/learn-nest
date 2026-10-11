import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/status')
  getStatus(): { status: string; message: string } {
    return {
      status: 'success',
      message: 'NestJS with PostgreSQL integration is running',
    };
  }
}
