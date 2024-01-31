import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/interfaces/theme';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AccessibilityMenuComponent } from './accessibility-menu/accessibility-menu.component';

const InOutAnimation = trigger('InOutAnimation', [
  state(
    'in',
    style({
      height: '*',
    }),
  ),
  transition('void => *', [
    style({ opacity: 0, height: 0 }),
    animate('0.5s ease-out'),
  ]),
  transition('* => void', [
    animate('0.5s ease-in'),
    style({ opacity: 0, height: 0 }),
  ]),
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
    AccessibilityMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [InOutAnimation],
})
export class NavbarComponent implements OnInit {
  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  layoutChanges: Observable<BreakpointState> = this.breakpointObserver.observe([
    Breakpoints.XSmall,
  ]);
  showMenu: boolean = false;
  isMobileLayout: boolean = false;

  ngOnInit() {
    this.layoutChanges.subscribe((state) => {
      if (state.matches) this.isMobileLayout = true;
      if (!state.matches) this.isMobileLayout = false;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
