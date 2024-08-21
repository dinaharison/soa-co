import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
  @Input() route = '/';
  @Input() name = 'Home';
}
