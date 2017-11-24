import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class PlayerService {

    values: Player = null;
    player$: BehaviorSubject<Player> = new BehaviorSubject<Player>(this.values);

    loadPlayerData() {
        // データの取得
        if (localStorage.getItem("setting")) {
            this.values = JSON.parse(localStorage.getItem("setting"));
        } else {
            this.values = new Player();
        }
        this.player$.next(this.values);
    }
    attacked(damage:number){
        this.values.hp_param -= damage;
    }
    getPlayerObs(){
        return this.player$.asObservable();
    }
}