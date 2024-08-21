import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { CreateAccountInput } from "./dto/create-account.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private readonly users: Repository<User>,
    ) {}

    async createAccount({email, password, role}: CreateAccountInput): Promise<string | undefined> {
        try {
            // Check if a user with the same email already exists.
            const exists = await this.users.findOne({where: {email}});
            if(exists) {
                return "Email already exists";
            }
            // Otherwise, create a new user.
            await this.users.save(this.users.create({email, password, role}));
        } catch (e) {
            return "Failed to create account";
        }
    }
}