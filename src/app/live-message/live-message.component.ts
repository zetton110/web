import { Component, OnInit } from '@angular/core';
import { LiveMessageService } from '../services/live-message.service';

@Component({
  selector: 'app-live-message',
  templateUrl: './live-message.component.html',
  styleUrls: ['./live-message.component.css']
})
export class LiveMessageComponent implements OnInit {

  constructor(
    private liveMsgService: LiveMessageService
  ) { }

  ngOnInit() {
  }

}
