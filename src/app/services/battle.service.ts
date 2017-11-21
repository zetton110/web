import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { BATTLE_ACTION } from '../app.const';
import { MEMBER } from '../app.const';
import { Action } from '../model/action';

@Injectable()
export class BattleService{

    //　バトルアクション
    battleAction:Action = new Action(); 
    
    // バトルアクションストリーム
    battleAction$ = new BehaviorSubject<Action>(this.battleAction);
    
    
    /**
     * バトルアクションストリームの取得
     */
    getBattleActionObs(){
        return this.battleAction$.asObservable();
    }
    
    /**
     * 攻撃対象の敵選択開始Actionの生成
     */
    targetSelect(){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.TARGET_SELECT;
        action.subject = BATTLE_ACTION.SUBJECT.PLAYER;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }

    
    /**
     * 攻撃対象の敵選択完了Actionの生成
     */
    targetSelectComplete(){
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
    attackFromPlayerTo(target:string){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        action.subject = BATTLE_ACTION.SUBJECT.PLAYER;
        action.target = target;
        action.damage = 2;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
        // デバッグ
        setTimeout(
            ()=>{
                this.attackToPlayerFrom(MEMBER.KANAGAWA.NAME)
            }
        ,5000);
    }
    
    /**
     * 敵からプレイヤーへ攻撃する際のActionを生成
     * 
     * @param  {string} subject
     */
    attackToPlayerFrom(subject:string){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.ENEMY_TURN;
        action.subject = subject;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
}