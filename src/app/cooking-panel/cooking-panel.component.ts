import { Component, OnInit } from '@angular/core';
import { GrillService } from '../grill/grill.service';
import { Menu } from '../grill/menu';

@Component({
  selector: 'app-cooking-panel',
  styleUrls: ['./cooking-panel.component.scss'],
  templateUrl: './cooking-panel.component.html',
})
export class CookingPanelComponent implements OnInit {

  public menus?: Menu[];

  public selectedMenu?: Menu;

  public loading: boolean = true;

  public constructor(
    private readonly grillService: GrillService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.menus = await this.grillService.getMenus();
    this.loading = false;
  }

  public handleMenuChange(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
