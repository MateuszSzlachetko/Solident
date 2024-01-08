import {afterNextRender, Injectable} from '@angular/core';
import {Theme, themes} from "../interfaces/theme.interface";
import {BehaviorSubject} from "rxjs";

const HIGH_CONTRAST_CLASS_NAME: string = 'contrast-mode'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = themes.light;
  private active$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.active);
  private isHighContrastMode: boolean = false;

  constructor() {
    afterNextRender(() => {
      const themePreference = this.getThemePreference();
      this.setActiveTheme(themePreference === 'dark' ? themes.dark : themes.light);
      if (themePreference ==='contrast')
        this.setHighContrastMode();
    });
  }

  setActiveTheme(theme: Theme) {
    this.isHighContrastMode = false;
    this.active = theme;
    document.documentElement.className = '';
    document.documentElement.classList.add(this.active.className);
    this.updateThemePreference(this.active.name);
    this.active$.next(this.active);
  }

  setHighContrastMode() {
    this.isHighContrastMode = true;
    document.documentElement.className = '';
    document.documentElement.classList.add(HIGH_CONTRAST_CLASS_NAME);
    this.updateThemePreference('contrast');
  }

  toggleTheme(): void {
    this.setActiveTheme(this.active === themes.light ? themes.dark : themes.light);
  }

  updateThemePreference(themeName:string) {
    localStorage.setItem('themePreference', themeName);
  }

  getThemePreference() {
    return localStorage.getItem('themePreference');
  }

  getActiveTheme() {
    return this.active$.asObservable();
  }

  toggleHighContrastMode() {
    this.isHighContrastMode ?
      this.setActiveTheme(this.active) :
      this.setHighContrastMode();
  }
}
