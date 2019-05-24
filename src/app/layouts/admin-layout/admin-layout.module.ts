import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';


//COMPONENTS:
import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { UserProfileComponent } from '../../cmp/user-profile/user-profile.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

//COMPONENTS FOR ME:
//../../cmp
import { GeneralesComponent } from '../../cmp/generales/generales.component';
import { PersonalesComponent } from '../../cmp/personales/personales.component';
import { AcademicosComponent } from '../../cmp/academicos/academicos.component';
import { FamiliaresComponent } from '../../cmp/familiares/familiares.component';
import { EscolaresComponent } from '../../cmp/escolares/escolares.component';
import { CardexComponent } from '../../cmp/cardex/cardex.component';
import { IndicadoresComponent } from '../../cmp/indicadores/indicadores.component';
import { IndicadorComponent } from '../../cmp/indicador/indicador.component';
import { MateriasListComponent } from '../../cmp/materias-list/materias-list.component';
import { MateriaRowComponent } from '../../cmp/materia-row/materia-row.component';


import { PruebaAccordionComponent } from '../../cmp/prueba-accordion/prueba-accordion.component';
import { Acordion1Component } from '../../cmp/acordion1/acordion1.component';
import { Acordion2Component } from '../../cmp/acordion2/acordion2.component';


//ANGULAR MATERIAL:
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { MatChipsModule} from '@angular/material/chips';


// from FileUpload
import { BrowserModule } from '@angular/platform-browser';







import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,

    FileUploadModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

    GeneralesComponent,
    PersonalesComponent,
    AcademicosComponent,
    FamiliaresComponent,
    EscolaresComponent,
    CardexComponent,
    IndicadoresComponent,
    IndicadorComponent,
    MateriasListComponent,
    MateriaRowComponent,

    PruebaAccordionComponent,
    Acordion1Component,
    Acordion2Component
  ],
  entryComponents: [    
  ]
})

export class AdminLayoutModule {}

