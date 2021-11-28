import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
     MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCheckboxModule,

  ]
})

export class AngularMaterialModule { }
