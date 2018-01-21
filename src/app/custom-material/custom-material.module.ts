import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
} from '@angular/material';
@NgModule({
    exports: [
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
    ]
})
export class CustomMaterialModule { }
