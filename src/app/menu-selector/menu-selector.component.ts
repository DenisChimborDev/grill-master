import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { Menu } from '../grill/menu';

@Component({
  selector: 'app-menu-selector',
  templateUrl: './menu-selector.component.html',
})
export class MenuSelectorComponent {

  @Input()
  public menus?: Menu[];

  @Output()
  public menuChange: EventEmitter<Menu> = new EventEmitter<Menu>();

  public handleSelectionChange(event: MatSelectChange): void {
    this.menuChange.emit(event.value as Menu);
  }
}
