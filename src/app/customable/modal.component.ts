import { Component, OnInit, Input } from '@angular/core';
import { ModalContextService } from "../modal/modal-context.service";
import { User } from './user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

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
