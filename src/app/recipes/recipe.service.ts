import { EventEmitter, Injectable } from '@angular/core';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredients } from './shared/iingredient.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  recipes:  Recipe[] = [
    new Recipe('A Test Recipe','this is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
    [
      new Ingredients('Meat',1),
      new Ingredients('french fries',20)
    ]),
    new Recipe('Another Recipe','testing','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredients('Buns',2),
        new Ingredients('Meat',20)
      ]
    )
  ];
  constructor(private slService: shoppingListService){

  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index : number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient : Ingredients[]){
    this.slService.addIngredient(ingredient);
  }
}
