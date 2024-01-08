import {ChangeDetectorRef, Component, inject, NgZone} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  welcomeImgSrc = 'assets/a.jpg';
  i: number = 2;
  ngZone = inject(NgZone)
  cd=inject(ChangeDetectorRef)

  constructor() {
    // afterNextRender(()=>{
    //   setInterval(()=>{
    //     this.animateWelcomeImage()
    //   },5000);
    // })
  }


  animateWelcomeImage() {
    if(this.i % 2)
      this.welcomeImgSrc='assets/a.jpg'
    else
      this.welcomeImgSrc='assets/bg.jpg'
    this.i++;
    this.cd.detectChanges()
  }


}
