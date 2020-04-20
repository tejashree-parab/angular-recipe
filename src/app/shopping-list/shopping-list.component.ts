import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingredientsChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService,
      private loggingService: LoggingService) {
  }
  
  ngOnInit(): void {
    this.loggingService.printLog("Hello from ShoppingListComponent!")
    this.ingredients = this.shoppingListService.getAllIngreditents();
    this.ingredientsChangeSub = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredient[]) =>{
            this.ingredients = ingredients;
        }
      );
  }
  
  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSub.unsubscribe();
  }
}
