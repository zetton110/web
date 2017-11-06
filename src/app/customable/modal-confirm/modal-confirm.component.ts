import { Component, OnInit, Input } from '@angular/core';
import { ModalContextService } from "../../modal/modal-context.service";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {


  constructor(
    private modal: ModalContextService
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    this.modal.resolve(null);
  }
}
