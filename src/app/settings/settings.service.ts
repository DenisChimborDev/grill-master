import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {

  private settings: Settings = {
    grillHeight: 20,
    grillWidth: 30,
    serviceUrl: 'http://isol-grillassessment.azurewebsites.net/api/GrillMenu',
  };

  public getSettings(): Settings {
    return {
      ...this.settings,
    };
  }

  public updateSettings(newSettings: Settings): void {
    this.settings = {
      ...newSettings,
    };
  }
}
