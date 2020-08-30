import { Component, OnInit } from '@angular/core';
import { TVShowsCategories } from './core/enums/tvshows-categories.enum';
import { RouterOutlet } from '@angular/router';
import { fader } from './core/animations/route-animations';

@Component({
  selector: 'app-topfive-root',
  templateUrl: './topfive-root.component.html',
  styleUrls: ['./topfive-root.component.scss'],
  animations: [fader]
})
export class TopfiveRootComponent implements OnInit {
  public showsCategories = TVShowsCategories;

  public ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
