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
/**
 * アプリケーション基底クラス
 * 
 * 本アプリのエントリポイントとなるコンポーネントです。
 */
export class AppComponent {
  title = 'app';
  private name = "";
  private password = "";
  private isLogined = false;
  private confirmDescription = "〇〇でよろしいですか？";

  constructor(private modal: ModalService) {
  }

  /**
   *　ログインフォームをモーダルダイアログ形式で表示します。
   */
  openLoginModal() {
    this.modal.open<User>(ModalLoginComponent, "ログインフォーム").then(
      user => {
        this.name = user.name;
        this.password = user.password;
        this.isLogined = true;
      }).catch(
      () => { }
      );
  }

  /**
   *　確認ダイアログを表示します。
   */
  openConfirmModal() {
    this.modal.open<null>(ModalConfirmComponent, "確認ダイアログ", this.confirmDescription).then(
      () => { }
    ).catch(
      () => { }
      );
  }

}
