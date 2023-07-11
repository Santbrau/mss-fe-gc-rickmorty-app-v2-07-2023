import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  @Input() character: any;
  @Output() showDetails: EventEmitter<any> = new EventEmitter<any>();

  seeMore() {
    this.showDetails.emit();
  }
}
