import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto} from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll() : string {
        return 'Get all items';
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
