import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    // For registering User entity with TypeORM.
    imports: [TypeOrmModule.forFeature([User])],
    // For registering UsersResolver and UsersService with the module.
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
