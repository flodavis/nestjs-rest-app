import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    @Get()
    findAll() : Item[] {
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param() param): string {
        return `Item ${param.id}`;
    }
    @Post()
    create(@Body() CreateItemDto: CreateItemDto): string {
        return `Name: ${CreateItemDto.name} Desc: ${CreateItemDto.description} Qty: ${CreateItemDto.qty}`;
    }
    @Delete(':id')
    delete(@Param('id') id): string{
        return `delete ${id}`;
    }
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string{
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }
}
