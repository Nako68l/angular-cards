import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { MainCardComponent } from './main-card/main-card.component';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
    ],
    declarations: [MainCardComponent]
})
export class CardsModule { }
