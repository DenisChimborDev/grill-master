
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: no-import-side-effect
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookingInformationComponent } from './cooking-information/cooking-information.component';
import { CookingPanelComponent } from './cooking-panel/cooking-panel.component';
import { CookingRoundComponent } from './cooking-round/cooking-round.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';
import { RoundSelectorComponent } from './round-selector/round-selector.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    RoundSelectorComponent,
    MenuSelectorComponent,
    CookingInformationComponent,
    CookingRoundComponent,
    MenuItemCardComponent,
    SettingsComponent,
    CookingPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
})
// tslint:disable-next-line: no-unnecessary-class
export class AppModule {
}
