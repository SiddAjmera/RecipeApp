import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService, 
    private shoppingListService: ShoppingListService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

}