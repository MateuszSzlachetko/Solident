import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { OfferCardComponent } from '../../components/offer-card/offer-card.component';
import { OfferInterface, SZ } from '../../core/interfaces/offer.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, OfferCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomeImgSrc = 'assets/a.jpg';
  offers: OfferInterface[] = [SZ];
  i: number = 2;
  ngZone = inject(NgZone);
  cd = inject(ChangeDetectorRef);

  constructor() {
    // afterNextRender(()=>{
    //   setInterval(()=>{
    //     this.animateWelcomeImage()
    //   },5000);
    // })
  }

  animateWelcomeImage() {
    if (this.i % 2) this.welcomeImgSrc = 'assets/a.jpg';
    else this.welcomeImgSrc = 'assets/bg.jpg';
    this.i++;
    this.cd.detectChanges();
  }
}
