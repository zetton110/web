import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ModalLoginComponent } from "./customable/modal-login/modal-login.component";
import { ModalConfirmComponent } from "./customable/modal-confirm/modal-confirm.component";
import { User } from './customable/modal-login/user.model';
import { Http, Headers } from '@angular/http';

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

  constructor(
    private modal: ModalService,
    private http: Http
  ) { }

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

  books: any[] = [];
  getBooksData() {
    this.http.get('/api/books').subscribe(
      res => {
        console.log(res.json());
        this.books = res.json();
      }
    )
  }
  // 条件検索
  select(id: string) {
    this.http.get(`/api/books/${id}`).subscribe(
      res => {
        console.log(res.json())
        this.books = [];
        this.books.push(res.json());
      }
    );
  }
  // 挿入
  insert(id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('api/books', {
      id: Number(id),
      title: `inserted-${id}`,
      fullName: "test-insert",
      description: "追加です。",
      reviews: "31 reviews"
    },{headers:headers})
    .subscribe(
      res => {
        console.log(res.json());
        this.getBooksData();
      }
    )
  }
  // 更新
  update(id:string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.put(`api/books/${id}`,
    {
      id: Number(id),
      title: `updated-${id}`,
      fullName: "test-update",
      description: "更新です。",
      reviews: "41 reviews"
    },
    {headers:headers})
    .subscribe(
      res =>{
        console.log(res.json());
        this.getBooksData();
      }
    );
  }
  // 削除
  delete(id:string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.delete(`api/books/${id}`)
    .subscribe(
      res => {
        this.getBooksData();
      }
      );
  }
}
