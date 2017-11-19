import { Component, OnInit } from '@angular/core';
import { LiveMessageService } from '../scene/live-message.service';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-fighting-menu',
  templateUrl: './fighting-menu.component.html',
  styleUrls: ['./fighting-menu.component.css']
})
export class FightingMenuComponent implements OnInit {

  constructor(
    private liveMsgService:LiveMessageService,
    private btlService:BattleService
  ) { }

  ngOnInit() {
  }

  attack(){
    this.liveMsgService.clear();
    this.liveMsgService.send("誰を攻撃しますか？")
    this.btlService.targetSelect();
  }
}
