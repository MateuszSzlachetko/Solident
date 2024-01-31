import { afterNextRender, Injectable } from '@angular/core';
import { Theme, themes } from '../interfaces/theme';
import { BehaviorSubject } from 'rxjs';

const HIGH_CONTRAST_CLASS_NAME: string = 'contrast-mode';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  textSize: number = 16;
  minTextSize: number = 14;
  maxTextSize: number = 18;

  constructor() {
    afterNextRender(() => {});
  }

  decreaseTextSize() {
    if (this.textSize <= this.minTextSize) return;
    this.textSize = this.textSize - 2;
    document.documentElement.style.fontSize = `${this.textSize}px`;
  }

  increaseTextSize() {
    if (this.textSize >= this.maxTextSize) return;
    this.textSize = this.textSize + 2;
    document.documentElement.style.fontSize = `${this.textSize}px`;
  }
}
