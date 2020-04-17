import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipe/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { 
        path: 'recipes', 
        component: RecipeComponent,
        canActivate: [AuthGuard],
        children:[
            { path:'', component: RecipeStartComponent },
            { path:'new', component: RecipeEditComponent },
            {
                path:':id', 
                component: RecipeDetailComponent, 
                resolve: [RecipesResolverService] },
            {
                path:':id/edit', 
                component: RecipeEditComponent, 
                resolve: [RecipesResolverService] 
            }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'auth', component: AuthComponent }
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}