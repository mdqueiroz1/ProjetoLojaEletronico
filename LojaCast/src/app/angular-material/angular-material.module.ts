import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';


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
  ]
})

export class AngularMaterialModule { }
