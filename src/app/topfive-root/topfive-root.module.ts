import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopfiveRootComponent } from './topfive-root.component';
import { TopFiveRoutingModule } from './topfive-routing.module';
import { TopfiveHeaderComponent } from './topfive-header/topfive-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxGlideModule } from 'ngx-glide';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';
import { RemoveTagsPipe } from './category-carousel/remove-tags.pipe';
import { SpinnerComponentComponent } from './spinner-component/spinner-component.component';
import { TopfiveMainComponent } from './topfive-main/topfive-main.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { TopfiveAboutComponent } from './topfive-about/topfive-about.component';

@NgModule({
  declarations: [
    TopfiveRootComponent,
    TopfiveHeaderComponent,
    CategoryCarouselComponent,
    CategoriesPageComponent,
    RemoveTagsPipe,
    SpinnerComponentComponent,
    TopfiveMainComponent,
    TopfiveAboutComponent
  ],
  imports: [
    CommonModule,
    TopFiveRoutingModule,
    FlexLayoutModule,
    NgxGlideModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class TopfiveRootModule {}
