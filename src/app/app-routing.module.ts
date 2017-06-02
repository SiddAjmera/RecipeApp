import { ProjectFormComponent } from './project-form/project-form.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
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
    { path: 'project-form', component: ProjectFormComponent },
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