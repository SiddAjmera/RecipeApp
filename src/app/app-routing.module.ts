import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: DefaultViewComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}