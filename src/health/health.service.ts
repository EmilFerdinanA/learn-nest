import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity.js';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async checkDatabase(): Promise<{ status: string; message: string }> {
    try {
      await this.userRepository.query('SELECT 1');
      return {
        status: 'healthy',
        message: 'Database connection successful',
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Database connection failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }
}