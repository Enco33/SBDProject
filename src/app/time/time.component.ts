import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  hour: number = 0
  min: number = 0
  sec: number = 0

  ngOnInit(): void{
    setInterval(() => {
      let time = new Date()
      this.hour = time.getHours()
      this.min = time.getMinutes()
      this.sec = time.getSeconds()
    }, 1000)
  }
}
