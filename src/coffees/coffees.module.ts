import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
