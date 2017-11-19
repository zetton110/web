import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ReflectiveInjector,
  ComponentRef
} from "@angular/core";
import { ModalContextService } from './modal-context.service';

@Injectable()
export class ModalService {
  public vcr: ViewContainerRef;

  private count = 0;

  constructor(
    private cfr: ComponentFactoryResolver
  ) {
  }

  /**
 *　モーダルダイアログ表示フラグ
 * @return {boolean} true/false モーダルダイアログの表示
 */
  isShow() {
    return this.count > 0;
  }

  /**
 *　モーダルダイアログ表示処理開始
 *  
 * @return {Promise<T>} true/false モーダルダイアログの表示
 */
  open<T>(comp: any, info: any) {

    return new Promise<T>((resolve, reject) => {

      // コンポーネント生成器を初期化
      const cf = this.cfr.resolveComponentFactory(comp);

      let cr: ComponentRef<any>;

      // 正常系処理の実装
      const _resolve = (val: T) => {
        if (cr) {
          cr.destroy();
          resolve(val);
          this.count--;
        }
      };

      // 異常系処理の実装
      const _reject = (reason?: any) => {
        if (cr) {
          cr.destroy();
          reject(reason);
          this.count--;
        }
      };

      // コンテキストの作成
      let ctx: ModalContextService = new ModalContextService(_resolve, _reject, info);

      // サービスへ紐づけ
      const bindings = ReflectiveInjector.resolve([
        { provide: ModalContextService, useValue: ctx }
      ]);

      const ctxInjector = this.vcr.parentInjector;
      const injector = ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector);
      cr = this.vcr.createComponent(cf, 1, injector);
      this.vcr.element.nativeElement.appendChild(cr.location.nativeElement);
      this.count++;
    });
  }
}