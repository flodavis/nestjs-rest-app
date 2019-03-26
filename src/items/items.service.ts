import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "12345678890",
            name: "Item One",
            qty: 100,
            description: "This is Item One"
        },
        {
            id: "5559875692",
            name: "Item Two",
            qty: 50,
            description: "This is Item Two"
        },
        {
            id: "34328384348",
            name: "Item Three",
            qty: 400,
            description: "This is Item Three"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
