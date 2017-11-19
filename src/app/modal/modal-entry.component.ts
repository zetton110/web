import {
  Injectable,
  ViewContainerRef,
  Component,
  ViewChild,
  Directive,
  AfterViewInit
} from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalInner } from './modal-inner';

@Component({
  selector: "modal-entry",
  styles: [`
    .bg {
      display: none;
    }
    .bg.active {
      display: block;
      background-color: rgba(0, 0, 0, 0.9);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 100px 0 0 0;
      z-index: 10;
    }
    [modal-inner] {
      margin: 0 auto;
      width: 500px;
    }
  `],
  template: `
    <div class="bg" [class.active]="modal.isShow()">
      <div modal-inner></div>
    </div>
  `
})
export class ModalEntryComponent implements AfterViewInit{
  @ViewChild(ModalInner) private inner: ModalInner;

  constructor(
    private modal: ModalService
  ) {
  }

  ngAfterViewInit() {
    this.modal.vcr = this.inner.vcr;
  }
}
