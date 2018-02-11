import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventLogTableComponent } from './event-log-table/event-log-table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'event-log-table', component: EventLogTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
