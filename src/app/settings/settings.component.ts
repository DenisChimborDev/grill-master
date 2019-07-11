import { Component } from '@angular/core';
import { Settings } from './settings';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  public settings: Settings = this.settingsService.getSettings();

  public constructor(
    private readonly settingsService: SettingsService,
  ) {
  }

  public handleUrlChange(serviceUrl: string): void {
    this.updateSettings({
      ...this.settings,
      serviceUrl,
    });
  }

  public handleWidthChange(grillWidth: number): void {
    this.updateSettings({
      ...this.settings,
      grillWidth,
    });
  }

  public handleHeightChange(grillHeight: number): void {
    this.updateSettings({
      ...this.settings,
      grillHeight,
    });
  }

  private updateSettings(value: Settings): void {
    this.settingsService.updateSettings(value);
  }
}
