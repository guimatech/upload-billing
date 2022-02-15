import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billings/billings.component';

const ROUTES: Routes = [
  { path: 'billing', component: BillingComponent },
  { path: '', redirectTo: '/billing', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }