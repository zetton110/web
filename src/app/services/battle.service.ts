import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { BATTLE_ACTION } from '../app.const';
import { MEMBER } from '../app.const';
import { Action } from '../model/action';
import { Enemy } from '../model/enemy';
import { EnemyService } from './enemy.service';
import { LiveMessageService } from './live-message.service';
import { PlayerService } from './player.service';
@Injectable()
export class BattleService {

    constructor(
        private playerService: PlayerService,
        private enemyService: EnemyService,
        private liveMsgService: LiveMessageService
    ) { }

    //　バトルアクション
    battleAction: Action = new Action();

    // バトルアクションストリーム
    battleAction$ = new BehaviorSubject<Action>(this.battleAction);


    /**
     * バトルアクションストリームの取得
     */
    getBattleActionObs() {
        return this.battleAction$.asObservable();
    }

    /**
     * 攻撃対象の敵選択開始Actionの生成
     */
    targetSelect() {
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.TARGET_SELECT;
        action.subject = BATTLE_ACTION.SUBJECT.PLAYER;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }


    /**
     * 攻撃対象の敵選択完了Actionの生成
     */
    targetSelectComplete() {
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        action.subject = BATTLE_ACTION.SUBJECT.PLAYER;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }

    /**
     * プレイヤーから敵へ攻撃する際のActionを生成
     * 
     * @param  {string} target
     */
    attackFromPlayerTo(target: string) {
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        action.subject = BATTLE_ACTION.SUBJECT.PLAYER;
        action.target = target;
        action.damage = 2;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
        setTimeout(()=>{
            this.changeEnemyTurn();
        },2000)
    }
    changeEnemyTurn(){
        let enemyNames: Array<string> = this.enemyService.shuffleEnemy();
        let loopLimit = enemyNames.length;
        let loopCount = 0;
        this.loopSleep(loopLimit,2000,()=>{
            let enemy: Enemy = this.enemyService.getEnemyObjFromName(enemyNames[loopCount]);
            let skill = this.enemyService.getEnemySkill(enemy.skills);
            this.attackToPlayerFrom(enemy.name, skill);
            loopCount++;
        })
    }

    loopSleep(_loopLimit, _interval, _mainFunc) {
        let loopLimit = _loopLimit;
        let interval = _interval;
        let mainFunc = _mainFunc;
        let i = 0;
        let loopFunc = function () {
            let result = mainFunc(i);
            if (result === false) {
                // break機能
                return;
            }
            i = i + 1;
            if (i < loopLimit) {
                setTimeout(loopFunc, interval);
            }
        }
        loopFunc();
    }


    /**
     * 敵からプレイヤーへ攻撃する際のActionを生成
     * 
     * @param  {string} subject
     */
    attackToPlayerFrom(subject: string, skill: any) {
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.ENEMY_TURN;
        action.subject = subject;
        action.skill = skill;
        this.liveMsgService.send(subject + skill.MESSAGE);
        if(skill.RATE > 0) {
            this.liveMsgService.send("ゆうしゃ　に　" + skill.RATE + "のダメージ");
            this.playerService.attacked(skill.RATE);
        }
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
}