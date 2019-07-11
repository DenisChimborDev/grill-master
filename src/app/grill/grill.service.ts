import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SettingsService } from '../settings/settings.service';
import { getCookingInstruction } from './cooker';
import { CookingInstruction } from './cookingInstruction';
import { Menu } from './menu';
import { convertMenu } from './menuConverter';
import { RawMenu } from './RawMenu';

@Injectable({
  providedIn: 'root',
})
export class GrillService {

  public constructor(
    private readonly http: HttpClient,
    private readonly settingsService: SettingsService,
  ) {
  }

  public async getMenus(): Promise<Menu[]> {
    const settings = this.settingsService.getSettings();
    return this.http.get<RawMenu[]>(settings.serviceUrl)
      .pipe(
        map(menus => menus.map(convertMenu)),
      )
      .toPromise();
  }

  public getCookingInstruction(menu: Menu): CookingInstruction {
    const settings = this.settingsService.getSettings();
    return getCookingInstruction(settings.grillWidth, settings.grillHeight, menu);
  }
}
