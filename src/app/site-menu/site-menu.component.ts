import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { Info } from '../model/info';
import { ModalConfirmComponent } from "../customable/modal-confirm/modal-confirm.component";

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.css']
})
export class SiteMenuComponent implements OnInit {

  constructor(
    private modal: ModalService
  ) { }

  ngOnInit() {
  }

  /**
   *　確認ダイアログを表示します。
   */
  openConfirmModal() {
    let inf = new Info();
    inf.infoType = "WAKATAKE_INFO";
    this.modal.open<null>(ModalConfirmComponent, inf).then(
      () => { }
    ).catch(
      () => { }
      );
  }

}
