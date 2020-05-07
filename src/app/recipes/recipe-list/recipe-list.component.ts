import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://i.ndtvimg.com/i/2016-11/gobi_620x350_41480311948.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://i.ndtvimg.com/i/2016-11/gobi_620x350_41480311948.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
