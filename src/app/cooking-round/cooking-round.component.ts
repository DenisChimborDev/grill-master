import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItemPosition } from '../grill/menuItemPosition';
import { Settings } from '../settings/settings';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-cooking-round',
  styleUrls: ['./cooking-round.component.scss'],
  templateUrl: './cooking-round.component.html',
})
export class CookingRoundComponent implements OnInit {

  @Input()
  public items: MenuItemPosition[] = [];

  @Output()
  public itemSelected: EventEmitter<MenuItemPosition | undefined> = new EventEmitter<MenuItemPosition | undefined>();

  public selectedItem?: MenuItemPosition;

  public settings?: Settings;

  public constructor(
    private readonly settingsService: SettingsService,
  ) {
  }

  public ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

  public handleItemClick(item: MenuItemPosition): void {
    this.selectedItem = this.selectedItem !== item ? item : undefined;
    this.itemSelected.emit(this.selectedItem);
  }
}
