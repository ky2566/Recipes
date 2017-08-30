import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=[];
recipe=new Recipe('Chicken Lollipop','Tasty Chicken Dish','https://pieceofcerebrum.files.wordpress.com/2016/08/chicken-lollipop-ume-kitchen.jpg?w=620');
  constructor() { }

  ngOnInit() {
  }

}
