import { Component, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { grow, avoid, blow, fade, mendoi, poyooon} from '../effects/animation';
import { Enemy } from '../model/enemy';
import { BATTLE_ACTION } from '../app.const';
import { BattleService } from '../battle.service';
import { LiveMessageService } from '../scene/live-message.service';
import { Action } from '../model/action';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css'],
  animations: [grow, avoid, blow, fade, mendoi, poyooon]
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
    fade: 'normal',
    grow: 'normal',
    poyoon: 'normal',
    avoid: 'normal',
    blow: 'normal',
    mendoi: 'normal'
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
        action => action.target == this.charaData.name || action.target == ""
        )
      .subscribe(action =>{        
        (action.phaze == BATTLE_ACTION.PHAZE.TARGET_SELECT && this.state.fade != 'fadeOut')? this.isTargetting = true:this.isTargetting = false;
        if(action.damage > 0) {
          this.charaData.hitPoint -= action.damage;
          this.liveMsgService.send(`${ this.charaData.name } に　${action.damage} の　ダメージ`);
          }
      })
  }

  selected(){
    this.battleService.targetSelectComplete();
    this.liveMsgService.send(`${ this.charaData.name } を　こうげき`);
    this.battleService.attackFromPlayerToEnemy(this.charaData.name);
    // this.state.poyoon = 'heighJump'
    // this.state.mendoi = 'lazy'
    // this.state.grow = 'large'
    // this.state.flyInOut = 'out'
    this.state.avoid = 'avoid';
  }

  addIconStyle(){
    return { backgroundImage: `url(${ this.charaData.iconUrl })`}
  }
  
  chainAnimations(e) {
    
    if(e.toState != "normal") {
      this.state.poyoon = "normal";
      this.state.mendoi = "normal";
      this.state.grow = "normal";
      this.state.avoid = "normal";
      this.state.blow = "normal";
    }
    if(this.charaData.hitPoint <= 0) this.state.fade = 'fadeOut';
  }

  start(e) {
    this.$animations.next(e);
  }

  done(e) {
    this.$animations.next(e);
  }
}
