import { Component } from '@angular/core';
import { Ingredients } from '../recipes/shared/iingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : Ingredients[];

  constructor(private slservice: shoppingListService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ingredients = this.slservice.getIngredients();
    this.slservice.ingredientsChange.subscribe(
      (ingredient:Ingredients[]) => {
        this.ingredients = ingredient;
      }
    )
  }


}
