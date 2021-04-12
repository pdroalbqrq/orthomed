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
  // @ViewChild(NgScrollbar, { static: true }) scrollbarRef: NgScrollbar;
  // @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;
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
