import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgswitchComponent } from './diretivas-ngswitch/diretivas-ngswitch.component';
import { DiretivasNgforComponent } from './diretivas-ngfor/diretivas-ngfor.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivasPersonalizadasComponent } from './diretivas-personalizadas/diretivas-personalizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivasNgifComponent,
    DiretivasNgswitchComponent,
    DiretivasNgforComponent,
    HighlightMouseDirective,
    DiretivasPersonalizadasComponent,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
