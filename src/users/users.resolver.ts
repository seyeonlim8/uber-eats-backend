/**
 * Query must be imported from @nestjs/graphql, NOT FROM @nestjs/common.
 */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Query(returns => Boolean)
    hi() {
        return true;
    }

    @Mutation(returns => CreateAccountOutput) 
    async createAccount(@Args('input') createAccountInput: CreateAccountInput): Promise<CreateAccountOutput> {
        try {
            // createAccount() may return an error.
            const error = await this.usersService.createAccount(createAccountInput);
            if(error) {
                return {ok: false, error};
            }
            return {ok: true};
        } catch (e) {
            return {ok: false, error: e};
        }
    }
}
