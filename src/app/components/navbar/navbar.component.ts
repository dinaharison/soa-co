import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NavItemComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() routes: { route: string; name: string }[] = [];
}
