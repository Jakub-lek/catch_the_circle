import { GameOverComponent } from './game-over/game-over.component';
import { PlaygroundGeneralComponent } from './playground/playground-general/playground-general.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'play', component: PlaygroundGeneralComponent },
  { path: 'game-over', component: GameOverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
