import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerCreationComponent } from './pages/scanner-creation/scanner-creation.component';
import { ZoneCreationComponent } from './pages/zone-creation/zone-creation.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import { ZoneMappingComponent } from './pages/zone-mapping/zone-mapping.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    ScannerCreationComponent,
    ZoneCreationComponent,
    VehicleDetailsComponent,
    ZoneMappingComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
