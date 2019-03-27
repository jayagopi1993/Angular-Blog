import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items;

  constructor(private _BlogApiService: BlogApiService) {  }

  ngOnInit() {
    this._BlogApiService.fetchStories()
    .subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories'));
  }

}
