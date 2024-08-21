import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

// Because Restaurant is an ObjectType, we need to specify in OmitType to make the resulting class an InputType.
@InputType()
export class createRestaurantDto extends OmitType(Restaurant, ['id'], InputType) {}
  
