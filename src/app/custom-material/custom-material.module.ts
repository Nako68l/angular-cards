import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
} from '@angular/material';
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    exports: [
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
