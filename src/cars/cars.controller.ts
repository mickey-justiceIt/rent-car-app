import {Controller, Get} from '@nestjs/common';

@Controller('cars')
export class CarsController {
     @Get()
     getAll(): any {
         return [
             {id: 1, car: "Volswagen Passat"},
             {id: 2, car: "Ford Mondeo"},
             {id: 3, car: "Audi TT"},
             {id: 4, car: "Mercedes Benz S500"},
             {id: 5, car: "Lada Largus"}
         ]
     }
}
