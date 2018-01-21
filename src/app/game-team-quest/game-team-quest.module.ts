import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { GameTeamFormComponent } from './game-team-form/game-team-form.component';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [GameTeamFormComponent]
})
export class GameTeamQuestModule { }
