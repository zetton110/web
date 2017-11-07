import { Component, Input } from "@angular/core";
import { ModalContextService } from "./modal-context.service";

@Component({
  selector: 'modal-container',
  styles: [`
    :host {
      display: block;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ddd;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.2)
    }
    header {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
    }
    header > p:first-child {
      flex: auto;
    }
    .closeBtn {
      text-align: right;
      flex-basis: 30px;
      color: #009688;
      cursor: pointer;
    }
    .body {
      padding: 10px 15px;
    }
  `],
  template: `
    <header>
      <p>{{title}}</p>
      <p class="closeBtn" (click)="cancel()">x</p>
    </header>
    <div class="body">
      <p *ngIf="isContainDescription">{{ description }}</p>
      <ng-content></ng-content>
    </div>
  `
})
export class ModalContainerComponent {
  constructor(
    private modalContext: ModalContextService
  ) {

    // タイトルの設定
    this.title = this.modalContext.title;

    //　説明文があれば設定
    if (this.modalContext.description != undefined) {
      this.isContainDescription = true;
      this.description = this.modalContext.description;
    }
  }
  
  title: string;
  description: string;
  isContainDescription: boolean = false;

  cancel() {
    this.modalContext.reject();
  }
}

