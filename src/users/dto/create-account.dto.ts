import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { User } from "../entities/user.entity";

// Create an account with email, password, and role.
@InputType()
export class CreateAccountInput extends PickType(User, ["email", "password", "role"]) {

}

// Defines the structure of the output of the createAccount mutation.
@ObjectType()
export class CreateAccountOutput {
    @Field(type => String, {nullable: true})
    error?: string;
    @Field(type => Boolean)
    ok: boolean;
}