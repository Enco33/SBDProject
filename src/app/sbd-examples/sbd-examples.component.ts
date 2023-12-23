import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sbd-examples',
  templateUrl: './sbd-examples.component.html',
  styleUrls: ['./sbd-examples.component.css']
})
export class SbdExamplesComponent implements OnInit{

  name = "nnnnn";
  disable = false;
  constructor() {


  }
  ngOnInit() {


  }

  changeName() {
    this.name = "Lego";
  }

  changeDisable() {
    this.disable = !this.disable;
  }

  changeNameSec() {
    this.name = "PiratJack";
  }
}
