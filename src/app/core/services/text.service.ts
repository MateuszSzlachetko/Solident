import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  textSize: number = 16;
  minTextSize: number = 14;
  maxTextSize: number = 18;

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
