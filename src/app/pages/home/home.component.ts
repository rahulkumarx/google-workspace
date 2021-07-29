import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  expand: boolean = false;
  expand1: boolean = false;
  expand2: boolean = false;
  expand3: boolean = false;
  expand4: boolean = false;
  expand5: boolean = false;
  showMessage: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  collapse(){
    this.expand = !this.expand;
    this.expand1 = false;
    this.expand2 = false;
    this.expand3 = false;
    this.expand4 = false;
    this.expand5 = false;
  }
}
