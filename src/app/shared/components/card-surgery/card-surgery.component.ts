import { Component, Input, OnInit } from '@angular/core';
import { CardSurgeryDto } from '../dto/card-surgery.dto';

@Component({
  selector: 'app-card-surgery',
  templateUrl: './card-surgery.component.html',
  styleUrls: ['./card-surgery.component.scss'],
})
export class CardSurgeryComponent {
  @Input() cardSurgeryDto: CardSurgeryDto;
}
