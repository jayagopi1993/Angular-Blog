import { Component, OnInit, Input } from '@angular/core';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemID: number;
  item;
  constructor(private _BlogApiService: BlogApiService) {  }


  ngOnInit() {
    this._BlogApiService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
  }
  

}
