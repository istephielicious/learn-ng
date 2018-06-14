import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // styles: [
  //   `
  //     .glyphicon { color:green }

  //   `
  // ],
  //encapsulation: ViewEncapsulation.None //default: Emulated
  
})
export class FavoriteComponent {
  title :string;
  @Input('is-favorite') isFavorite = false;
  @Output('change') click = new EventEmitter();

  onClickFave() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }

}


export interface FaveArgs {
  newValue: boolean
}
