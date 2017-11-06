import { Injectable } from "@angular/core";

@Injectable()
export class ModalContextService {
  constructor(
    private _resolve: Function,
    private _reject: Function
  ) {
  }
  resolve(val: any) {
    this._resolve(val);
  }
  reject(reason?: any) {
    this._reject(reason);
  }
}