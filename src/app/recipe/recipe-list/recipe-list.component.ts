import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeChangedSub: Subscription;
  
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeChangedSub =this.recipeService.recipesChanged
      .subscribe( recipes => {
        this.recipes = recipes;
      });
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(){
    this.recipeChangedSub.unsubscribe();
  }
}
