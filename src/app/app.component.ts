import { Component, ComponentRef, ElementRef, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuDto } from './shared/components/dto/menu.dto';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuDto: MenuDto[] = null;
  whatsappLink = 'https://api.whatsapp.com/send?phone=5581998610627&text=Ol%C3%A1,%20gostaria%20das%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos'
  private _scrollSubscription = Subscription.EMPTY;

  constructor() {
    this.menuDto = [
      { text: 'Início', route: './' },
      { text: 'Sobre nós', route: 'sobre-nos' },
      { text: 'Contato', route: 'contato' },
    ];
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this._scrollSubscription.unsubscribe();
  }
}
