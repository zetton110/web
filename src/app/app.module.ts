import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalLoginComponent } from './customable/modal-login/modal-login.component';
import { ModalConfirmComponent } from './customable/modal-confirm/modal-confirm.component';
import { ModalInner } from './modal/modal-inner';
import { ModalContextService } from './modal/modal-context.service';
import { ModalEntryComponent } from './modal/modal-entry.component';
import { ModalService } from './modal/modal.service';
import { ModalContainerComponent } from './modal/modal-container.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { HttpModule,JsonpModule } from '@angular/http';
import { BooksData } from './mock/dammy-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SceneComponent } from './scene/scene.component';
import { LiveMessageService } from './scene/live-message.service';
import { EnemyComponent } from './enemy/enemy.component';
import { EnemyService } from './enemy/enemy.service';
import { PlayerComponent } from './player/player.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { FightingMenuComponent } from './fighting-menu/fighting-menu.component';
import { LiveMessageComponent } from './live-message/live-message.component';
import { BattleService } from './battle.service';
import { WakatakeInfoComponent } from './wakatake-info/wakatake-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    ModalConfirmComponent,
    ModalEntryComponent,
    ModalInner,
    ModalContainerComponent,
    EnemyComponent,
    SceneComponent,
    PlayerComponent,
    SiteMenuComponent,
    FightingMenuComponent,
    LiveMessageComponent,
    WakatakeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(BooksData)
  ],
  providers: [
    ModalContextService,
    ModalService,
    LiveMessageService,
    EnemyService,
    BattleService
    ],
  entryComponents: [ 
     WakatakeInfoComponent,
     ModalLoginComponent,
     ModalConfirmComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
