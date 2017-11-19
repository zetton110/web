import { Injectable } from "@angular/core";
import { Info } from '../model/info';

  /**
 *　Modalダイアログの表記・動作を設定するクラス
 */
@Injectable()
export class ModalContextService {

  /**
*　コンストラクタ
* 
* @param {Function} resolve　resolveメソッド（Promise）
* @param {Function} reject　rejectメソッド（Promise）
* @param {string} title　ダイアログのタイトル文字列（必須）
* @param {string} object　ダイアログの説明文（任意）
*/
  constructor(
    private _resolve: Function,
    private _reject: Function,
    public info: Info
  ) {
  }

  /**
 *　Promise成功時の処理を発火
 * 
 * @param {any} object　処理実行結果
 */
  resolve(val: any): void {
    this._resolve(val);
  }

  /**
 *　Promise失敗時の処理を発火
 * 
 * @param {any} object  処理実行失敗時のエラー情報
 */
  reject(reason?: any): void {
    this._reject(reason);
  }

}