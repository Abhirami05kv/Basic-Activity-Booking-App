
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { ActivityService } from './activity/activity.service';
import { ActivityModule } from './activity/activity.module';
import { UsersService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { Activity } from './activity/entity/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'BasicBookingApp',
      entities: [User, Activity],
      synchronize: true, 
    }),
    UserModule,
    AuthModule,
    ActivityModule,
  ],
  // providers: [ UsersService, AuthService],
})
export class AppModule {}
