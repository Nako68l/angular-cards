import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CardsModule } from './cards/cards.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CardsModule,

        FormsModule,
        HttpModule,
        CustomMaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
