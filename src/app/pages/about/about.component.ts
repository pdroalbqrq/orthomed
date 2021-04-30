import { Component, OnInit } from '@angular/core';
import { AppTitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private titleService: AppTitleService) {
    this.titleService.setTitle('Sobre nós');
  }

  ngOnInit(): void {}
}
