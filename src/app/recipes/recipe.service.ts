import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private _recipes: Recipe[] = [
        new Recipe(
            'Naan', 
            'This recipe makes the best naan I have tasted outside of an Indian restaurant. I can\'t make enough of it for my family. I serve it with shish kabobs, but I think they would eat it plain.', 
            'http://images.media-allrecipes.com/userphotos/250x250/115386.jpg'
        ),
        new Recipe(
            'Indian-Influenced Zucchini Onion Pepper Latkes', 
            'Thanks to the inspiration from two other AllRecipes recipes, I concocted this and it was a winner. It wasn\'t really spicy at all and the kids loved it. Excellent served with a dollop of sour cream.', 
            'http://images.media-allrecipes.com/userphotos/560x315/4391060.jpg'
        ),
        new Recipe(
            'Naan', 
            'This recipe makes the best naan I have tasted outside of an Indian restaurant. I can\'t make enough of it for my family. I serve it with shish kabobs, but I think they would eat it plain.', 
            'http://images.media-allrecipes.com/userphotos/250x250/115386.jpg'
        )
    ];

    getRecipes(){
        return this._recipes.slice();
    }
}