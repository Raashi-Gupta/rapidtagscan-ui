import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import { ZoneCreationComponent } from './pages/zone-creation/zone-creation.component';
import { ZoneMappingComponent } from './pages/zone-mapping/zone-mapping.component';
import { ScannerCreationComponent } from './pages/scanner-creation/scanner-creation.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehicleTrackerComponent } from './pages/vehicle-tracker/vehicle-tracker.component';
import { FastTagComponent } from './pages/fast-tag/fast-tag.component';

const routes: Routes = [
  {path:'vehicleDetails',component:VehicleDetailsComponent},
  {path:'zoneCreation',component:ZoneCreationComponent},
  {path:'zoneMapping',component:ZoneMappingComponent},
  {path:'scannerCreation',component:ScannerCreationComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'vehicalDetails',component:VehicleDetailsComponent},
  {path:'vehicalTracker',component:VehicleTrackerComponent},
  {path:'fastTag',component:FastTagComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
