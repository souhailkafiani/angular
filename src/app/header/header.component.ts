import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(config: NgsRevealConfig) { 
    config.duration = 800;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  }

  ngOnInit() {
  }

}
