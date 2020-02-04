// https://www.techiediaries.com/use-javascript-in-angular/
// npm install jquery --save
/* angular.json ->
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js"
]
*/

// toggle -> alterna la clase que tenia definida junto con la clase que le decimos en el toggle: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle
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
    /*(($) => {
      $(document).ready(() => {
        const header = document.getElementById('header');
        header.classList.toggle('active');
        console.log(header);

      });
    })(jQuery);*/
  }

  onClick(){
    (($) => {
      $(document).ready(() => {
        const header = document.getElementById('header');
        header.classList.toggle('active');
        console.log(header);

      });
    })(jQuery);
  }

}
