import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] =[
        new Recipe('Corn Kadai',
            'Corn Kadai!',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
            [new Ingredient('Corn', 1),
                new Ingredient('Garam masala', 1),
                new Ingredient('Oil', 1),
                new Ingredient('Red Chilly powder', 1)]),
        new Recipe('Red Velvet Cupcakes',
            'With chocolate sponge & cream cheese',
            'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2019/10/red_velvet_cupcake.jpg?itok=DV3ozEbV',
            [new Ingredient('All purpose flour', 2),
                new Ingredient('Vanilla essence', 1),
                new Ingredient('Choco powder', 1),
                new Ingredient('Strawberry', 10)]),
        new Recipe('Stuffed Pasta',
            'Stuffed Pasta bake bolognese',
            'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2019/09/stuffed-pasta-bake-bolognese.jpg?itok=7cTBPd2g',
            [new Ingredient('Pasta', 2),
                new Ingredient('Cheese', 1)]),
        new Recipe('Flat white',
            'Earned its spot at the breakfast table',
            'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2018/03/flat-white.jpg?itok=GxHgDHr3',
            [new Ingredient('Pasta', 2),
                new Ingredient('Cheese', 1)]),
        new Recipe('Bozzy coffee & walnut cake',
            'Perfect party sponge serve at tea',
            'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe_images/recipe-image-legacy-id--1273545_8.jpg?itok=tawPsPBj',
            [new Ingredient('Pasta', 2),
                new Ingredient('Cheese', 1)]),
        new Recipe('Smoky veggie nachos',
            'Platter of vegetarian nachos',
            'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2019/11/smoky-veggie-nachos.jpg?itok=-JH46r59',
            [new Ingredient('Pasta', 2),
                new Ingredient('Cheese', 1)])
    ];

    constructor(private shoppingListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(index: number){
        return this.recipes.slice()[index];
    }

    addAllIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addAllIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}