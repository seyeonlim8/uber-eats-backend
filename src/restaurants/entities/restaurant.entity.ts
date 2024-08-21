import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Create an ObjectType for Restaurant.
// Make it an entity to add to TypeORM.
@ObjectType()
@Entity()
export class Restaurant {
  // Describe how restaurant looks like in GraphQL.

  // Mandatory column.
  @PrimaryGeneratedColumn()
  @Field((is) => Number)
  id: number;

  // The function should return a String. ('is' part can be anything)
  @Field((is) => String)
  @IsString()
  @Length(5, 10)
  @Column()
  name: string;

  @Field((is) => Boolean, { nullable: true }) // for GraphQL
  @IsBoolean()
  @IsOptional()
  @Column({ default: false }) // for TypeORM
  isVegan?: Boolean;

  @Field((type) => String)
  @IsString()
  @Column()
  address: string;

  @Field((type) => String)
  @IsString()
  @Column()
  ownerName: string;

  @Field((type) => String)
  @IsString()
  @Column()
  category: string;
}
