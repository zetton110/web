import { Component, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { grow, avoid, blow, fadeOut, yurayura, poyooon,faint,bounceOutUp,rubberBand} from '../effects/animation';
import { Enemy } from '../model/enemy';
import { BATTLE_ACTION } from '../app.const';
import { BattleService } from '../services/battle.service';
import { LiveMessageService } from '../services/live-message.service';
import { Action } from '../model/action';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
  animations: [grow, avoid, blow, fadeOut, yurayura, poyooon,faint,bounceOutUp,rubberBand]
})
export class EnemyComponent implements OnInit {

  constructor(
    private battleService:BattleService,
    private liveMsgService:LiveMessageService
  ) { }

// アニメーションのストリームを取得
  $animations: Subject<any> = new Subject();
  @Input() charaData:Enemy = null;
  isTargetting = false;

  effect = {
    fadeOut: 'normal',
    grow: 'normal',
    poyooon: 'normal',
    avoid: 'normal',
    blow: 'normal',
    yurayura: 'normal',
    faint: 'normal',
    bounceOutUp: 'normal',
    rubberBand: 'normal'
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

    this.battleService
      .getBattleActionObs()
      .filter(
        action => action.target == this.charaData.name || action.subject == this.charaData.name || action.target == BATTLE_ACTION.TARGET.ALL
        )
      .subscribe(action =>{
        // デバッグ用 -------------------------
        if(action.subject == this.charaData.name){
          this.effect[action.skill.EFFECT] = action.skill.EFFECT;
        }
        // ------------------------------------

        (action.phaze == BATTLE_ACTION.PHAZE.TARGET_SELECT && this.effect.fadeOut != 'dead')? this.isTargetting = true:this.isTargetting = false;
        if(action.damage > 0) {
          this.charaData.hitPoint -= action.damage;
          this.liveMsgService.send(`${ this.charaData.name } に　${action.damage} の　ダメージ`);
          }
      })
  }

  lockOn(){
    this.battleService.targetSelectComplete();
    this.liveMsgService.send(`${ this.charaData.name } を　こうげき`);
    this.battleService.attackFromPlayerTo(this.charaData.name);
    this.effect.faint = 'faint';
  }

  addIconStyle(){
    return { backgroundImage: `url(${ this.charaData.iconUrl })`}
  }
  
  chainAnimations(e) {
    
    if(e.toState != "normal") {
      this.effect.poyooon = "normal";
      this.effect.yurayura = "normal";
      this.effect.grow = "normal";
      this.effect.avoid = "normal";
      this.effect.blow = "normal";
      this.effect.faint = "normal";
      this.effect.bounceOutUp = "normal";
      this.effect.rubberBand = "normal";
    }
    if(this.charaData.hitPoint <= 0) this.effect.fadeOut = 'fadeOut';
  }

  start(e) {
    this.$animations.next(e);
  }

  done(e) {
    this.$animations.next(e);
  }
}
