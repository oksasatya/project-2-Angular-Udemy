import { EventEmitter } from "@angular/core";
import { Ingredients } from "../recipes/shared/iingredient.model";

export class shoppingListService {
  ingredientsChange = new EventEmitter<Ingredients[]>();

  private ingredients : Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatos',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredient(ingredients:Ingredients[]){
    // for(let ingredient of this.ingredients){
    //   this.addIngredient(this.ingredients);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice())
  }
}
