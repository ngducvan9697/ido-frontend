import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}
  token: any;
  ngOnInit() {
    this.token = this.tokenService.getPayload();
    console.log(this.token);
  }
}
