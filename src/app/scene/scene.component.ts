import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { PlayerService } from '../services/player.service';
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
    private enemyService: EnemyService,
    private playerService: PlayerService
  ) { 
    this.playerService.loadPlayerData();
  }

  wktk_desctiption = "チーム若竹です。";
  enemys:Array<Enemy> = [];

  ngOnInit() {
    this.liveMsgService.send("チームわかたけ　が　あらわれた")
    this.enemys = this.enemyService.setUp();
  }
}
