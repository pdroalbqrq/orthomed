import { Component } from '@angular/core';
import { CardSurgeryDto } from 'src/app/shared/components/dto/card-surgery.dto';
import { AppTitleService } from 'src/app/shared/services/title.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cardsSurgery: CardSurgeryDto[];
  constructor(private titleService: AppTitleService) {
    this.titleService.setTitle('Início');
    this.cardsSurgery = [
      {
        title: 'Cirurgia Buco Maxilo Facial',
        description: `Remoção de dentes inclusos (siso), implantes, cirurgia ortognática e Dor orofacial`,
        image: '../../../../assets/img/folder-buco.jpg',
      },
      {
        title: 'Neurocirurgia',
        description: `A Neurocirurgia é uma especialidade médica que se ocupa do tratamento de adultos e crianças portadores de doenças do sistema nervoso`,
        image: '../../../../assets/img/neuro.jpg',
      },
      {
        title: 'Ortopedia',
        description: `A Neurocirurgia é uma especialidade médica que se ocupa do tratamento de adultos e crianças portadores de doenças do sistema nervoso`,
        image: '../../../../assets/img/orthoped.jpg',
      },
    ];
  }

  scrollToSection(el: HTMLElement) {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}
