import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, HttpClientModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
