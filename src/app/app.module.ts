import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PlaygroundGeneralComponent } from './playground/playground-general/playground-general.component';
import { PlaygroundSidepanelComponent } from './playground/playground-sidepanel/playground-sidepanel.component';
import { PlaygroundDeskComponent } from './playground/playground-desk/playground-desk.component';
import { GameOverComponent } from './game-over/game-over.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ScoreDialogComponent } from './score/score-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlaygroundGeneralComponent,
    PlaygroundSidepanelComponent,
    PlaygroundDeskComponent,
    GameOverComponent,
    ScoreDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
