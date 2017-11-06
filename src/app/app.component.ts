import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ModalLoginComponent } from "./customable/modal-login/modal-login.component";
import { ModalConfirmComponent } from "./customable/modal-confirm/modal-confirm.component";
import { User } from './customable/modal-login/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private name = "";
  private password = "";
  private isLogined = false;
  private confirmDescription = "〇〇でよろしいですか？";

  constructor(private modal: ModalService) {
  }

  openLoginModal() {
    this.modal.open<User>(ModalLoginComponent).then(user => {
      this.name = user.name;
      this.password = user.password;
      this.isLogined = true;
    }).catch(
      () => {
        
      }
    );
  }
  openConfirmModal(){
      this.modal.open<null>(ModalConfirmComponent,this.confirmDescription).then(() => {
    }).catch(
      () => {
        
      }
    );
  }

}
