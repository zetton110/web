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

  isShow() {
    return this.count > 0;
  }

  open<T>(comp: any, msg?: string) {

    return new Promise<T>((resolve, reject) => {
      const cf = this.cfr.resolveComponentFactory(comp);

      let cr: ComponentRef<any>;
      const _resolve = (val: T) => {
        if (cr) {
          cr.destroy();
          resolve(val);
          this.count--;
        }
      };
      
      const _reject = (reason?: any) => {
        if (cr) {
          cr.destroy();
          reject(reason);
          this.count--;
        }
      };

      // コンテキストの作成
      let ctx: ModalContextService = null;
      if (msg == undefined) {
        ctx = new ModalContextService(_resolve, _reject);
      } else {
        ctx = new ModalContextService(_resolve, _reject, msg);
      }
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