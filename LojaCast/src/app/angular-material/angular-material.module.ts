import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule }  from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatSnackBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ]
})

export class AngularMaterialModule { }
