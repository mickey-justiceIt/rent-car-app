import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { CarsController } from './cars/cars.controller';
import { CarController } from './car/car.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController, CarsController, CarController],
  providers: [AppService],
})
export class AppModule {}
