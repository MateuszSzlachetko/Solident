import { booleanAttribute, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgClass],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {
  @Input({ required: true }) iconSrc: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) content: string = '';
  @Input({ required: true }) redirectTo: string = '';
  @Input({ transform: booleanAttribute, required: true }) even: boolean = false;
}
