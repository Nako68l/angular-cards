import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { GameTeamFormComponent } from './game-team-form/game-team-form.component';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
    ],
    declarations: [GameTeamFormComponent]
})
export class GameTeamQuestModule { }
