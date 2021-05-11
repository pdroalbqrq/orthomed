import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardSurgeryComponent } from './shared/components/card-surgery/card-surgery.component';
import { WhatsappComponent } from './shared/components/whatsapp/whatsapp.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './shared/components/map/map-component/map.component';
import { CustomInfoWindowComponent } from './shared/components/map/custom-info-window/custom-info-window.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppTitleService } from './shared/services/title.service';
import { LogoComponent } from './shared/components/logo/logo.component';
import { PhoneIconComponent } from './shared/components/phone-icon/phone-icon.component';
import { EmailIconComponent } from './shared/components/email-icon/email-icon.component';
import { CardContactComponent } from './shared/components/card-contact/card-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CardSurgeryComponent,
    WhatsappComponent,
    TooltipComponent,
    MapComponent,
    CustomInfoWindowComponent,
    LogoComponent,
    PhoneIconComponent,
    EmailIconComponent,
    CardContactComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, GoogleMapsModule],
  providers: [AppTitleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
