import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    (($) => {
      $(document).ready(() => {
        const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');
        setInterval(() => {
          let day = new Date();
          let hh = day.getHours() * 30;
          let mm = day.getMinutes() * deg;
          let ss = day.getSeconds() * deg;
          hr.style.transform = 'rotateZ(${hh+(mm/12)}deg)';
          mn.style.transform = 'rotateZ(${mm}deg)';
          sc.style.transform = 'rotateZ(${ss}deg)';
        });

      });
    })(jQuery);*/
  }

}
