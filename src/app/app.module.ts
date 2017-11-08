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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    ModalConfirmComponent,
    ModalEntryComponent,
    ModalInner,
    ModalContainerComponent
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
    ModalService
    ],
    entryComponents: [ 
      ModalLoginComponent,
      ModalConfirmComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
