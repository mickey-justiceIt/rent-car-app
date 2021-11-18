import {Controller,Param,Body, Get, Post} from '@nestjs/common';
import {CreateOrderDto} from "./dto/create-order.dto";

@Controller('orders')
export class OrdersController {
    @Get()
        getAll() {
            return 'getOrders'
        }
    @Get(':id')
    getOne(@Param('id') id:string):string {
        return 'getOrders' + id
    }
    @Post()
    create(@Body() createOrderDto:CreateOrderDto){
       return `
           Id ${createOrderDto.id}
           Car ${createOrderDto.car} 
           Price ${createOrderDto.price} 
           Day ${createOrderDto.day} 
           `
    }
}
