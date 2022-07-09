import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://static.wikia.nocookie.net/money-heist/images/9/93/Tokyo_-_part_5_volume_2_poster.jpg/revision/latest/scale-to-width-down/700?cb=20211210141633')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
