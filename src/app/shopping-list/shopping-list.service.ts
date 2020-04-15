import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',2),
        new Ingredient('Tomatoes',10)
    ];

    getIngredient(index: number): Ingredient{
        return this.ingredients[index];
    }

    getAllIngreditents(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addAllIngredients(ingredients: Ingredient[]){
        //Not a good way to emit event for each ingredients
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        //We will use push method by passing ingredients list using ... into push method
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}