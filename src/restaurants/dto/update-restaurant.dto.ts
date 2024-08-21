import {  Field, InputType, PartialType } from "@nestjs/graphql";
import { createRestaurantDto } from "./create-restaurant.dto";
import { number } from "joi";

// Partial type is used to make all the properties in the class optional except for the id.
@InputType()
export class UpdateRestaurantInputType extends PartialType(createRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
  
   @Field(type => Number)
   id: number;

   @Field(type => UpdateRestaurantInputType)
   data: UpdateRestaurantInputType;
}