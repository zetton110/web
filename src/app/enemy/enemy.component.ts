import { Component, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { grow, avoid, blow, dead, mendoi, poyooon,faint,bounceOutUp} from '../effects/animation';
import { Enemy } from '../model/enemy';
import { BATTLE_ACTION } from '../app.const';
import { BattleService } from '../services/battle.service';
import { LiveMessageService } from '../services/live-message.service';
import { Action } from '../model/action';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
  animations: [grow, avoid, blow, dead, mendoi, poyooon,faint,bounceOutUp]
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

  state = {
    dead: 'normal',
    grow: 'normal',
    poyooon: 'normal',
    avoid: 'normal',
    blow: 'normal',
    mendoi: 'normal',
    faint: 'normal',
    bounceOutUp: 'normal'
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
          this.state[action.skill.EFFECT] = action.skill.EFFECT;
        }
        // ------------------------------------

        (action.phaze == BATTLE_ACTION.PHAZE.TARGET_SELECT && this.state.dead != 'dead')? this.isTargetting = true:this.isTargetting = false;
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
    this.state.faint = 'faint';
  }

  addIconStyle(){
    return { backgroundImage: `url(${ this.charaData.iconUrl })`}
  }
  
  chainAnimations(e) {
    
    if(e.toState != "normal") {
      this.state.poyooon = "normal";
      this.state.mendoi = "normal";
      this.state.grow = "normal";
      this.state.avoid = "normal";
      this.state.blow = "normal";
      this.state.faint = "normal";
      this.state.bounceOutUp = "normal";
    }
    if(this.charaData.hitPoint <= 0) this.state.dead = 'dead';
  }

  start(e) {
    this.$animations.next(e);
  }

  done(e) {
    this.$animations.next(e);
  }
}
