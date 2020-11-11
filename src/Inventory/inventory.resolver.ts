import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { InventoryService } from "./inventory.service";

@Resolver('Inventory')
export class InventoryResolver{

    constructor(private readonly inventoryService: InventoryService){}

    @Query()
    async inventory(){
        return this.inventoryService.getInventory();
    }
}
