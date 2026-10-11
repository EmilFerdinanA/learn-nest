import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigurationModule } from './configuration/configuration.module.js';
import { DatabaseModule } from './configuration/database.module.js';
import { UsersModule } from './users/users.module.js';
import { HealthModule } from './health/health.module.js';
import { AuthModule } from './auth/auth.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Configuration and Database
    ConfigurationModule,
    DatabaseModule,

    // Business Modules
    UsersModule,
    HealthModule,
    AuthModule,

    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'learn-nest',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
