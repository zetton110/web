import { BATTLE_ACTION } from '../app.const';

export class Action{
    // バトルフェイズ
    phaze:string = BATTLE_ACTION.PHAZE.PLAYER_TURN;
    
    // 主体
    subject:string = "";
    
    // 対象
    target:string = "";

    // スキル
    skill:any = null;

    // ダメージ
    damage:number = 0;
}