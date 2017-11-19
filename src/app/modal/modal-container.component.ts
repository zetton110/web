import { Component, Input } from "@angular/core";
import { ModalContextService } from "./modal-context.service";
import { Info } from '../model/info';
import { WakatakeInfoComponent } from '../wakatake-info/wakatake-info.component';

@Component({
  selector: 'modal-container',
  styles: [`
    :host {
      display: block;
      border-radius: 12px;
      color:  rgba(250,250,250 ,1);
      box-shadow: 0px 2px 12px rgba(224,224,224 ,0.4);
      font-family: Lato, "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
      position: absolute;
      top:24px;
      right:24px;
      left:24px;
      bottom:24px;
      padding: 16px;
      background: #360033;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #0b8793, #360033);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #0b8793, #360033); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    header {
      display: flex;
      padding: 10px 15px;
      text-align: left;
    }
    header > p:first-child {
      flex: auto;
    }
    .closeBtn {
      text-align: center;
      flex-basis: 30px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
    }
    .body {
      flex: auto;
      text-align:left;
      padding: 10px 15px;

    }
  `],
  template: `
    <header>{{ info?.title }}</header>
    <div class="closeBtn" (click)="cancel()">x</div>
    <div class="body">
      <p>{{ info?.description }}</p>
      <ng-content></ng-content>
      <ng-container *ngComponentOutlet="comp"></ng-container>
    </div>
  `
})
export class ModalContainerComponent {

  info:Info = null;
  comp = null;

  constructor(
    private modalContext: ModalContextService
  ) {

    // タイトルの設定
    this.info = this.modalContext.info;
    if(this.info.infoType == "WAKATAKE_INFO") this.comp = WakatakeInfoComponent;
  }


  cancel() {
    this.modalContext.reject();
  }
}

