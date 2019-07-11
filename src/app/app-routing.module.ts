import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingPanelComponent } from './cooking-panel/cooking-panel.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    component: SettingsComponent,
    path: 'settings',
  },
  {
    component: CookingPanelComponent,
    path: '**',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
// tslint:disable-next-line: no-unnecessary-class
export class AppRoutingModule {
}
