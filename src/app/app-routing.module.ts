import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCardComponent } from './cards/main-card/main-card.component';

const routes: Routes = [
    {
        path: "",
        component: MainCardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
