import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import mapStyle from '../map.style';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  @ViewChild('myplace', { static: false }) marker: MapMarker;
  mapStyle = mapStyle;

  infoContent =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the ' +
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    'Aboriginal people of the area. It has many springs, waterholes, ' +
    'rock caves and ancient paintings. Uluru is listed as a World ' +
    'Heritage Site.</p>' +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';

  zoom = 15;
  center: google.maps.LatLngLiteral = {
    lat: -8.046017017300535,
    lng: -34.88903620872896,
  };
  options: google.maps.MapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    styles: this.mapStyle as any,
    disableDoubleClickZoom: true,
    maxZoom: 30,
    minZoom: 8,
  };

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: '../../../../../assets/img/pinmap.svg',
      scaledSize: { width: 40, height: 40 } as any,
    },
  };
  constructor() {}

  ngAfterViewInit(): void {
    this.infoWindow.open(this.marker);
  }

  openInfo(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
