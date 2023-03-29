import { Component } from '@angular/core';
import { Ingredients } from '../recipes/shared/iingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : Ingredients[] =[
    new Ingredients('Apples',5),
    new Ingredients('Tomatos',10)
  ];

  onIngredientAdded(ingredient :Ingredients){
    this.ingredients.push(ingredient);
  }
}
