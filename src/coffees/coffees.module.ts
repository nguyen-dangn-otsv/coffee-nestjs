import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
