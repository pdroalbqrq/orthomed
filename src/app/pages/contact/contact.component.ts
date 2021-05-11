import { Component, OnInit } from '@angular/core';
import { AppTitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailList = [];
  phoneList = [];
  constructor(private titleService: AppTitleService) {
    this.titleService.setTitle('Contato');
  }

  ngOnInit(): void {
    this.emailList = [
      {
        isEmail: true,
        list: [
          { value: 'comercial@orthomedicalimplantes.com', type: 'comercial' },
          {
            value: 'orcamento@orthomedicalimplantes.com',
            type: 'orçamento',
          },
          {
            value: 'financeiro@orthomedicalimplantes.com',
            type: 'financeiro',
          },
        ],
      },
    ];

    this.phoneList = [
      {
        isEmail: false,
        list: [{ value: '+55 (81) 999999999', type: 'ligação e whatsapp' }],
      },
    ];
  }
}
