import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') totalLikes: number;
  @Input('isActive') isLiked = false;

  onClick() {
    this.totalLikes += (!this.isLiked) ? 1 : (this.totalLikes > 0) ? -1 : 0;
    this.isLiked = !this.isLiked;
  }
}
