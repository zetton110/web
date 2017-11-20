import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { BATTLE_ACTION } from './app.const';
import { Action } from './model/action';

@Injectable()
export class BattleService{
    battleAction:Action = new Action(); 
    battleAction$ = new BehaviorSubject<Action>(this.battleAction);
    
    getBattleActionObs(){
        return this.battleAction$.asObservable();
    }
    targetSelect(){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.TARGET_SELECT;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
    targetSelectComplete(){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
    attackFromPlayerToEnemy(name:string){
        let action = new Action();
        action.phaze = BATTLE_ACTION.PHAZE.PLAYER_TURN;
        action.target = name;
        action.damage = 2;
        this.battleAction = action;
        this.battleAction$.next(this.battleAction);
    }
}