import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
