import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { ModalLoginComponent } from "./customable/modal-login/modal-login.component";
import { ModalConfirmComponent } from "./customable/modal-confirm/modal-confirm.component";
import { User } from './customable/modal-login/user.model';
import { Http, Headers, Jsonp, URLSearchParams, RequestOptions } from '@angular/http';
import { grow, flyInOut, fade } from './effects/animation';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [grow, flyInOut, fade]
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
    private http: Http,
    private jsonp: Jsonp
  ) { }

  $animations: Subject<any> = new Subject();

  state = {
    grow: '',
    flyInOut: '',
    fade: ''
  };

  ngOnInit() {
    this.$animations
      .filter(e => e.phaseName == "done")
      .subscribe({
        next: this.chainAnimations.bind(this)
      });

    this.$animations.next({
      phaseName: "done",
      toState: "out"
    });
  }

  chainAnimations(e) {
    console.log(e);
    switch (e.toState) {
      case "fadeIn":
      case "fadeOut":
        this.toggleGrow();
        break;
      case "small":
      case "large":
        this.toggleFlyInOut();
        break;
      case "in":
      case "out":
        this.toggleFade();
        break;
    }
  }

  start(e) {
    this.$animations.next(e);
  }

  done(e) {
    this.$animations.next(e);
  }

  toggleFade() {
    this.state.fade = (this.state.fade === 'fadeIn' ? 'fadeOut' : 'fadeIn');
  }

  toggleGrow() {
    this.state.grow = (this.state.grow === 'small' ? 'large' : 'small');
  }

  toggleFlyInOut() {
    this.state.flyInOut = (this.state.flyInOut === 'in' ? 'out' : 'in');
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
  // 条件検索　(JSONP利用版)
  // モック利用の場合は実際はhttp通信を行っていないため？
  // 使えない。
  selectByJsonp(id: string) {
    let params = new URLSearchParams();
    params.set('id', id);
    params.set('callback', 'JSONP_CALLBACK');
    this.jsonp.get(`api/books`, { search: params })
      .subscribe(
      res => {
        console.log(res.json());
        // this.books = res.json();
      }
      )
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
    }, { headers: headers })
      .subscribe(
      res => {
        console.log(res.json());
        this.getBooksData();
      }
      )
  }
  // 挿入　(JSONP利用版)
  // これなんか違う！
  insertByJsonp(id: string) {

    let data = {
      id: Number(id),
      title: `inserted-${id}`,
      fullName: "test-insert",
      description: "追加です。",
      reviews: "99 reviews"
    };

    this.jsonp.post(
      'api/books',
      JSON.stringify(data),
      new RequestOptions({})
    )
      .subscribe(
      res => {
        console.log(res);
        this.getBooksData();
      }
      )
  }
  // 更新
  update(id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.put(`api/books/${id}`,
      {
        id: Number(id),
        title: `updated-${id}`,
        fullName: "test-update",
        description: "更新です。",
        reviews: "41 reviews"
      },
      { headers: headers })
      .subscribe(
      res => {
        console.log(res.json());
        this.getBooksData();
      }
      );
  }
  // 削除
  delete(id: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.delete(`api/books/${id}`)
      .subscribe(
      res => {
        this.getBooksData();
      }
      );
  }
}
