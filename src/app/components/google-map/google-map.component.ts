import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
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
    options: {
      animation: 4.0,
    },
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
  protected readonly GOOGLE_MAPS_CONFIG = GOOGLE_MAPS_CONFIG;
  protected apiLoaded: Observable<boolean> = new Observable<boolean>();
  apiKey: string = environment.mapsApiKey;
  httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this.loadMapsAPI();
  }

  loadMapsAPI() {
    this.apiLoaded = this.httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`,
        'callback',
      )
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  mapRedirect() {
    (window as any).open(MAPS_LOCATION_URL, '_blank');
  }
}
