import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import { ZoneCreationComponent } from './pages/zone-creation/zone-creation.component';
import { ZoneMappingComponent } from './pages/zone-mapping/zone-mapping.component';
import { ScannerCreationComponent } from './pages/scanner-creation/scanner-creation.component';

const routes: Routes = [
  {path:'vehicleDetails',component:VehicleDetailsComponent},
  {path:'zoneCreation',component:ZoneCreationComponent},
  {path:'zoneMapping',component:ZoneMappingComponent},
  {path:'scannerCreation',component:ScannerCreationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
