import { Injectable } from '@angular/core';
import { Enemy } from '../model/enemy';
import { MEMBER } from '../app.const';

@Injectable()
export class EnemyService {

    constructor() {

    }

    enemyNames: Array<string> = [];
    enemyObj: Array<Enemy> = [];

    /*
    * 敵オブジェクトのセットアップ
    *
    */
    setUp(): Array<Enemy> {
        let enemys: Array<Enemy> = [];
        enemys.push(
            new Enemy(
                MEMBER.KANAGAWA.NAME,
                MEMBER.KANAGAWA.ICON,
                10,
                MEMBER.KANAGAWA.SKILLS
            ));
        enemys.push(
            new Enemy(
                MEMBER.FUJIWARA.NAME,
                MEMBER.FUJIWARA.
                    ICON,
                10,
                MEMBER.FUJIWARA.SKILLS
            ));
        enemys.push(
            new Enemy(
                MEMBER.HATSUDA.NAME,
                MEMBER.HATSUDA.ICON,
                10,
                MEMBER.HATSUDA.SKILLS
            ));
        enemys.push(
            new Enemy(
                MEMBER.ITO.NAME,
                MEMBER.ITO.ICON,
                10,
                MEMBER.ITO.SKILLS
            ));
        enemys.forEach(enemy => {
            this.enemyNames.push(enemy.name);
        });
        this.enemyObj = enemys;
        return enemys;
    }

    shuffleEnemy() {
        for (var i = this.enemyNames.length - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = this.enemyNames[i];
            this.enemyNames[i] = this.enemyNames[r];
            this.enemyNames[r] = tmp;
        }
        return this.enemyNames;
    }

    getEnemyObjFromName(name:string):Enemy {
        let en:Enemy = null;
        this.enemyObj.forEach(enemy => {
            if(enemy.name == name) en = enemy; 
        });
        return en;
    }

    getEnemySkill(skills: Array<any>) {
        //添字を全て取得
        let aryKeys = Object.keys(skills);
        //対象の添字をランダムに取得
        let index = aryKeys[Math.floor(Math.random() * aryKeys.length)];
        return skills[index];
    }
}