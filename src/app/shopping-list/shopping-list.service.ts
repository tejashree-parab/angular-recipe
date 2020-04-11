import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple',2),
        new Ingredient('Tomatoes',10)
    ];

    getAllIngreditents(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addAllIngredients(ingredients: Ingredient[]){
        //Not a good way to emit event for each ingredients
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        //We will use push method by passing ingredients list using ... into push method
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}