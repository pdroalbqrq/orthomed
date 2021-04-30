import { Component, OnInit } from '@angular/core';
import { AppTitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private titleService: AppTitleService) {
    this.titleService.setTitle('Contato');
  }

  ngOnInit(): void {}
}
