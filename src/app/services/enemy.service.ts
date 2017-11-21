import { Injectable } from '@angular/core';
import { Enemy } from '../model/enemy';
import { MEMBER } from '../app.const';

@Injectable()
export class EnemyService{
    
    constructor(){

    }

    /*
    * 敵オブジェクトのセットアップ
    *
    */
    setUp():Array<Enemy> {
        let enemys:Array<Enemy> = [];
        enemys.push(new Enemy(MEMBER.KANAGAWA.NAME,MEMBER.KANAGAWA.ICON,10));
        enemys.push(new Enemy(MEMBER.FUJIWARA.NAME,MEMBER.FUJIWARA.ICON,10));
        enemys.push(new Enemy(MEMBER.HATSUDA.NAME,MEMBER.HATSUDA.ICON,10));
        enemys.push(new Enemy(MEMBER.ITO.NAME,MEMBER.ITO.ICON,10));
        return enemys;
    }
}