import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, CommonModule, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../core/services/theme.service";
import {Theme} from "../../core/interfaces/theme.interface";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


const InOutAnimation = trigger('InOutAnimation', [
  state(
    'in',
    style({
      opacity: 1,
      height: '*',
    })
  ),
  transition('void => *', [style({opacity: 0, height: 0}), animate('0.5s ease-out')]),
  transition('* => void', [animate('0.5s ease-in'), style({opacity: 0, height: 0})]),
]);
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    AsyncPipe,
    NgIf,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations:[InOutAnimation]
})
export class NavbarComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  breakpointObserver: BreakpointObserver = inject(BreakpointObserver)
  theme$: Observable<Theme> = this.themeService.getActiveTheme();
  layoutChanges: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.XSmall]);
  showMenu: boolean = false;
  isMobileLayout: boolean = false;

  ngOnInit() {
    this.layoutChanges.subscribe(state => {
      if (state.matches)
        this.isMobileLayout = true;
      if (!state.matches)
        this.isMobileLayout = false;
    })
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleHighContrastMode() {
    this.themeService.toggleHighContrastMode();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
