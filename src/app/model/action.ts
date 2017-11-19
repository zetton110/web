import { BATTLE_ACTION } from '../app.const';

export class Action{
    phaze:string = BATTLE_ACTION.PHAZE.PLAYER_TURN;
    target:string = "";
    damage:number = 0;
}