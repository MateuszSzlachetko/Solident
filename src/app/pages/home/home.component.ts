import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import {
  OfferInterface,
  OFFERS_AESTHETIC_MEDICINE,
  OFFERS_DENTISTRY,
} from '../../core/interfaces/offer.interface';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, OfferCardComponent, GoogleMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  dentistryOffers: OfferInterface[] = OFFERS_DENTISTRY;
  aestheticMedicineOffers: OfferInterface[] = OFFERS_AESTHETIC_MEDICINE;
}
