import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaimsListComponent} from './claims-list/claims-list.component';
import { ClaimComponent } from './claim/claim.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ClaimsListComponent
  }, {
    path: 'claim/:claimId',
    component: ClaimComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
