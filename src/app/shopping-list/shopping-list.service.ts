import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    private _ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientAdded.next(this._ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // this._ingredients = this._ingredients.concat(ingredients);
        this._ingredients.push(...ingredients);
        this.ingredientAdded.next(this._ingredients.slice());
    }

}