import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { BlogApiService } from './blog-api.service';
import { DomainPipe } from './pipes/domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule
  ],
  providers: [BlogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
