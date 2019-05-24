import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { ComponentsModule } from './components/components.module';

// arriba por defaul ANGULAR
import { MatFormFieldModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material'
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app.routing'; // ES APP.ROUTES // -> VA EN LOS IMPORTS


//SERVICIOS:
import { AlumnosService } from './services/alumnos.service';
import { IndicadoresService } from './services/indicadores.service';
import { CurriculaService } from './services/curricula.service';


import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';










@NgModule({
  imports: [
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    HttpClientModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    AlumnosService,
    IndicadoresService,
    CurriculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
