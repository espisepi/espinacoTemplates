// https://www.techiediaries.com/use-javascript-in-angular/
// npm install jquery --save
/* angular.json ->
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js"
]
*/
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-purecss',
  templateUrl: './purecss.component.html',
  styleUrls: ['./purecss.component.css']
})
export class PurecssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (($) => {
      $(document).ready(() => {
        console.log('Hello from jQuery!');
      });
    })(jQuery);
  }

}
