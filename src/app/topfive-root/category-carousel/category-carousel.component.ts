import { Component, AfterViewInit } from '@angular/core';
import { TopFiveApiService } from 'src/app/api/api-service/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { TopShows } from '../core/vendor/topShows';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss']
})
export class CategoryCarouselComponent implements AfterViewInit {
  public backdrops: any[] = [];
  public tvShows: any[] = [];
  public topShows = TopShows;
  public isLoading = true;

  constructor(
    private topFiveApiService: TopFiveApiService,
    private route: ActivatedRoute
  ) {}

  public async ngAfterViewInit() {
    this.displayShows();
  }

  public getShows() {
    return new Promise(resolve => {
      const paramAccess = 'category';
      const cat = this.route.snapshot.params[paramAccess];
      const shows = this.topShows.find(x => x.category === cat);
      for (const show of shows.topShows) {
        this.topFiveApiService.getTvShow(show).subscribe({
          next: response => {
            this.tvShows = [...this.tvShows, response[0]];
            if (this.tvShows.length > 4) {
              resolve(true);
            }
          }
        });
      }
    });
  }

  public async displayShows() {
    const result = await this.getShows();
    if (result) {
      this.backdrops = this.tvShows;
    }
  }

  trackByFn(index: any) {
    return index;
  }
}
