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
    FormsModule
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