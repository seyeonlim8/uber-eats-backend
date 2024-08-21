import { Field } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CoreEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    // This will automatically create a column in the database when the entity is created.
    @CreateDateColumn()
    @Field(type => Date)
    createdAt: Date;

    // This will automatically create a column in the database when the entity is updated.
    @UpdateDateColumn()
    @Field(type => Date)
    updatedAt: Date;
}