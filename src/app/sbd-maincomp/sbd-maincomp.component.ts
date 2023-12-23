import { Component } from '@angular/core';

@Component({
  selector: 'app-sbd-maincomp',
  templateUrl: './sbd-maincomp.component.html',
  styleUrls: ['./sbd-maincomp.component.css']
})
export class SbdMaincompComponent {
  title = 'First page';
  name = '';
  lastname = '';
  mymoments: string[] = [];

  addMoment(hour:number, min:number, sec:number) {
    this.mymoments.push(`${hour}:${min}:${sec}`)
  }


}
