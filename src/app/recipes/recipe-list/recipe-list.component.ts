import { Component } from '@angular/core';
import { Recipe } from '../recipe.modul';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:  Recipe[] = [
    new Recipe('A Test Recipe','this is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg')
  ];

}
