import { Component, Input, OnChanges } from '@angular/core';
import { CookingInstruction } from '../grill/cookingInstruction';
import { GrillService } from '../grill/grill.service';
import { Menu } from '../grill/menu';
import { MenuItemPosition } from '../grill/MenuItemPosition';

@Component({
  selector: 'app-cooking-information',
  styleUrls: ['./cooking-information.component.scss'],
  templateUrl: './cooking-information.component.html',
})
export class CookingInformationComponent implements OnChanges {

  @Input()
  public menu?: Menu;

  public cookingInstruction?: CookingInstruction;

  public selectedRoundItems: MenuItemPosition[] = [];

  public selectedItem?: MenuItemPosition;

  public warningItemColumns: string[] = [
    'name',
    'length',
    'width',
    'quantity',
  ];

  public constructor(
    private readonly grillService: GrillService,
  ) {
  }

  public ngOnChanges(): void {
    if (this.menu !== undefined) {
      this.cookingInstruction = this.grillService.getCookingInstruction(this.menu);
    }
  }

  public handleRoundChange(roundItems: MenuItemPosition[]): void {
    this.selectedRoundItems = roundItems;
  }

  public handleItemSelected(item: MenuItemPosition): void {
    this.selectedItem = item;
  }
}
