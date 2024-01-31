import { afterNextRender, Component, inject, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../environments/environment.prod';

const GOOGLE_MAPS_CONFIG = {
  mapOptions: {
    center: { lat: 50.68112, lng: 17.9332711 },
    zoom: 18,
    options: {
      fullscreenControl: true,
      mapTypeControl: true,
      streetViewControl: true,
      mapId: 'fb28f6dc1b6e756b',
    },
  },
  marker: {
    title: 'SOLIDENT - Anna Szlachetko | Gabinet dentystyczno-protetyczny',
    address1: 'Chabrów 58',
    address2: 'Opole, Poland',
    coords: { lat: 50.6812918, lng: 17.9332711 },
    placeId: 'ChIJ4RhXXa5TEEcReDGy2T1buqk',
  },
};

const MAPS_LOCATION_URL: string =
  'https://www.google.com/maps/dir/?api=1&origin=&destination=SOLIDENT+-+Anna+Szlachetko+%7C+Gabinet+dentystyczno-protetyczny%2CChabr%C3%B3w+58%2COpole%2C+Poland';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule, AsyncPipe, HttpClientJsonpModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  protected readonly GOOGLE_MAPS_CONFIG = GOOGLE_MAPS_CONFIG;
  protected apiLoaded: Observable<boolean> = new Observable<boolean>();
  apiKey: string = environment.mapsApiKey;
  httpClient: HttpClient = inject(HttpClient);

  constructor() {
    afterNextRender(() => {
      this.apiLoaded = this.httpClient
        .jsonp(
          `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`,
          'callback',
        )
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
    });
  }

  mapRedirect() {
    (window as any).open(MAPS_LOCATION_URL, '_blank');
  }
}

// CONFIG: any = {
//   locations: [
//     {
//       title: '',
//       address1: '',
//       address2: 'Opole, Poland',
//       coords: {  },
//       placeId: '',
//     },
//   ],
//   mapOptions: {
//     center: { lat: 38.0, lng: -100.0 },
//     fullscreenControl: true,
//     mapTypeControl: false,
//     streetViewControl: false,
//     zoom: 4,
//     zoomControl: true,
//     maxZoom: 17,
//     mapId: '',
//   },
//   mapsApiKey: 'YOUR_API_KEY_HERE',
//   capabilities: {
//     input: false,
//     autocomplete: false,
//     directions: false,
//     distanceMatrix: false,
//     details: false,
//     actions: false,
//   },
// label: {
//   color: '#ffffff',
//   fontWeight: 'bold',
//   fontSize: '12px',
//   text: 'Your text here',
// },
// };
