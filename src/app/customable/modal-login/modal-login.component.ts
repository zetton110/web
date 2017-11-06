import { Component, OnInit, Input } from '@angular/core';
import { ModalContextService } from "../../modal/modal-context.service";
import { User } from './user.model';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  private name: string;
  private password: string;

  constructor(
    private modal: ModalContextService
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    let user = new User();
    user.name = this.name;
    user.password = this.password;
    this.modal.resolve(user);
  }
}
