import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCardComponent } from './cards/main-card/main-card.component';
import { GameTeamFormComponent } from './game-team-quest/game-team-form/game-team-form.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [
    { path: "", component: GameTeamFormComponent },
    { path: "card", component: MainCardComponent },
    { path: "404", component: NotFoundComponent },
    { path: "**", redirectTo: "/404" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
