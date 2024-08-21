import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestaurant(createRestaurantDto: createRestaurantDto): Promise<Restaurant> {
    const newRestauant = this.restaurants.create(createRestaurantDto);
    // Put the new restaurant into the database.
    return this.restaurants.save(newRestauant);
  }

  updateRestaurant({id, data}: UpdateRestaurantDto) {
    // ... means the content of data.
    return this.restaurants.update(id, {...data});
  }
}
