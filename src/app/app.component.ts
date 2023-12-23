import { Component } from '@angular/core';
export interface Note {text: string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TitleComponent';
  name = 'John';
  lastname = 'Week';
  moments: string[] = []
  text = '';

  arr: Note[] = [{text:'String 1'}, {text:'String 2'}];


  addString() {
    const arr = {text: this.text};
    this.arr.push(arr);
    this.text = '';
  }
  deleteString(n: number){
    this.arr.splice(n,1)
  }

    /*addMoment(hour: number, min: number, sec: number) {
      alert(`${hour}:${min}:${sec}`)
    }*/

  addMoment(hour:number, min:number, sec:number) {
    this.moments.push(`${hour}:${min}:${sec}`)
  }
  deleteMoment(i: number) {
    this.moments.splice(i,1)
  }

}
