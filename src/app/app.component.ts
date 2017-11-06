import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from "./customable/modal.component";
import { User } from './customable/user.model';

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

  constructor(private modal: ModalService) {
  }

  openModal() {
    this.modal.open<User>(ModalComponent).then(user => {
      this.name = user.name;
      this.password = user.password;
      this.isLogined = true;
    }).catch(
      () => {
        
      }
    );
  }

}
