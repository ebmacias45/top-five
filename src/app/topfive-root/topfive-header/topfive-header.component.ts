import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { TVShowsCategories } from '../core/enums/tvshows-categories.enum';

@Component({
  selector: 'app-topfive-header',
  templateUrl: './topfive-header.component.html',
  styleUrls: ['./topfive-header.component.scss']
})
export class TopfiveHeaderComponent implements OnInit {
  public showsCategories: string[] = [];
  public action = 'action';

  public ngOnInit() {
    this.getCategories();
  }

  public getCategories() {
    for (const category in TVShowsCategories) {
      if (category) {
        this.showsCategories = [...this.showsCategories, category];
      }
    }
  }
}
