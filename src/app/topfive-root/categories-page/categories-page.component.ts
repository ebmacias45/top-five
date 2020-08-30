import { Component, OnInit } from '@angular/core';
import { TVShowsCategories } from '../core/enums/tvshows-categories.enum';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public showsCategories = TVShowsCategories;

  constructor() {}

  ngOnInit(): void {}
}
