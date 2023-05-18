import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-gh',
  templateUrl: './cards-gh.component.html',
  styleUrls: ['./cards-gh.component.css']
})
export class CardsGHComponent {
  @Input() repos: any;

}
