import { Component, OnInit,Input } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../model/player'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player:Player = null;

  constructor(
    private playerService:PlayerService
  ) {
    this.playerService.getPlayerObs().subscribe(
      player => { this.player = player }
    );
   }

  ngOnInit() {
  }

}
