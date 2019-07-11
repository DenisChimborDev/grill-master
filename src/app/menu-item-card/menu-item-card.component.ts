import { Component, Input } from '@angular/core';
import { MenuItem } from '../grill/menuItem';

@Component({
  selector: 'app-menu-item-card',
  styleUrls: ['./menu-item-card.component.scss'],
  templateUrl: './menu-item-card.component.html',
})
export class MenuItemCardComponent {

  @Input()
  public menuItem?: MenuItem;
}
