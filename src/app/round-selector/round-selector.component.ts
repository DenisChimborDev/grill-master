import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MenuItemPosition } from '../grill/menuItemPosition';

@Component({
  selector: 'app-round-selector',
  templateUrl: './round-selector.component.html',
})
export class RoundSelectorComponent implements OnChanges {

  @Input()
  public rounds?: MenuItemPosition[][];

  @Output()
  public roundChange: EventEmitter<MenuItemPosition[]> = new EventEmitter<MenuItemPosition[]>();

  public currentRoundIndex: number = -1;

  public ngOnChanges(): void {
    this.currentRoundIndex = this.rounds !== undefined && this.rounds.length > 0 ? 0 : -1;
    this.raiseRoundChange();
  }

  public selectPreviousRound(): void {
    if (this.isPreviousRoundAvailable()) {
      this.currentRoundIndex--;
      this.raiseRoundChange();
    }
  }

  public selectNextRound(): void {
    if (this.isNextRoundAvailable()) {
      this.currentRoundIndex++;
      this.raiseRoundChange();
    }
  }

  public isPreviousRoundAvailable(): boolean {
    return this.rounds !== undefined && this.currentRoundIndex > 0;
  }

  public isNextRoundAvailable(): boolean {
    return this.rounds !== undefined && this.currentRoundIndex < this.rounds.length - 1;
  }

  private raiseRoundChange(): void {
    if (this.rounds !== undefined) {
      this.roundChange.emit(this.rounds[this.currentRoundIndex]);
    }
  }
}
