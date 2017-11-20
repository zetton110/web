import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { BATTLE_ACTION } from './app.const';
import { Action } from './model/action';

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
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }

    
    /**
     * 攻撃対象の敵選択完了Actionの生成
     */
    targetSelectComplete(){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
    
    /**
     * プレイヤーから敵へ攻撃する際のActionを生成
     * 
     * @param  {string} targetName
     */
    attackFromPlayerToEnemy(targetName:string){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        action.target = targetName;
        action.damage = 2;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
    
    /**
     * 敵からプレイヤーへ攻撃する際のActionを生成
     * 
     * @param  {string} enemyName
     */
    attackFromEnemyToPlayer(enemyName:string){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.ENEMY_TURN;
        // TODO: 敵の行動を入れる
    }
}