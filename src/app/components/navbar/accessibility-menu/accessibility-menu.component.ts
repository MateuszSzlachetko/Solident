import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../../../core/interfaces/theme';
import { ThemeService } from '../../../core/services/theme.service';
import { TextService } from '../../../core/services/text.service';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-accessibility-menu',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, NgIf],
  templateUrl: './accessibility-menu.component.html',
  styleUrl: './accessibility-menu.component.scss',
})
export class AccessibilityMenuComponent {
  themeService: ThemeService = inject(ThemeService);
  textService: TextService = inject(TextService);
  theme$: Observable<Theme> = this.themeService.getActiveTheme();

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleHighContrastMode() {
    this.themeService.toggleHighContrastMode();
  }

  decreaseTextSize() {
    this.textService.decreaseTextSize();
  }

  increaseTextSize() {
    this.textService.increaseTextSize();
  }
}
