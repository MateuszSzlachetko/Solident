import { afterNextRender, Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule, AsyncPipe, HttpClientJsonpModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent {
  protected apiLoaded: Observable<boolean> = new Observable<boolean>();
  httpClient: HttpClient = inject(HttpClient);
  apiKey: string = '';
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
}
