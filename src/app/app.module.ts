import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider, Injectable } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CardsModule } from './cards/cards.module';
import { GameTeamQuestModule } from './game-team-quest/game-team-quest.module';
import { ErrorModule } from './error/error.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        'swipe': { direction: Hammer.DIRECTION_ALL }
    }
}
@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent
    ],
    imports: [
        CardsModule,
        FormsModule,
        HttpModule,
        CustomMaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        GameTeamQuestModule,
        ErrorModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
