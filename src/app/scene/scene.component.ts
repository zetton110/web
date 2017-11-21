import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { LiveMessageService } from '../services/live-message.service';
import { EnemyService } from '../services/enemy.service';
import { Enemy } from '../model/enemy';
import { Info } from '../model/info';
import { Player } from '../model/player';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  constructor(
    private liveMsgService: LiveMessageService,
    private enemyService: EnemyService
  ) { }

  wktk_desctiption = "チーム若竹です。";
  playerInfo = null;
  enemys:Array<Enemy> = [];

  ngOnInit() {
    // データの取得
    if(localStorage.getItem("setting")){
      this.playerInfo = JSON.parse(localStorage.getItem("setting"));
    }else{
      this.playerInfo = new Player();
    }
    this.liveMsgService.send("チームわかたけ　が　あらわれた")

    this.enemys = this.enemyService.setUp();
  }
}
