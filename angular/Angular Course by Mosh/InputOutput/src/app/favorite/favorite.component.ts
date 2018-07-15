import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('favorite') isFavorite: boolean;
  
  @Output('change') changeEvent = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.changeEvent.emit({newValue: this.isFavorite});
  }

  constructor() {
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
