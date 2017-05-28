import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    private _ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
    }

}