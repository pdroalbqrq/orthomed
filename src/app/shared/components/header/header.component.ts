import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { Subscription } from 'rxjs';
import { MenuDto } from '../dto/menu.dto';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuDto: MenuDto = null;
  public clazz: string;

  constructor() {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.clazz = window.scrollY > 0 ? 'sticky' : null;
    console.log(this.clazz);
  }
}
