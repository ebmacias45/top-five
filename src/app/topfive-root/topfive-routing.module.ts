import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopfiveRootComponent } from './topfive-root.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';
import { TopfiveMainComponent } from './topfive-main/topfive-main.component';
import { TopfiveAboutComponent } from './topfive-about/topfive-about.component';

const routes: Routes = [
  {
    path: '',
    component: TopfiveRootComponent,
    children: [
      {
        path: '',
        component: TopfiveMainComponent,
        data: { animation: 'main' }
      },
      {
        path: 'tvshows/categories',
        component: CategoriesPageComponent,
        data: { animation: 'categories' }
      },
      {
        path: 'tvshows/about',
        component: TopfiveAboutComponent,
        data: { animation: 'about' }
      },
      {
        path: 'tvshows/:category',
        component: CategoryCarouselComponent,
        data: { animation: 'shows' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopFiveRoutingModule {}
