import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.css']
})
export class DiretivasNgforComponent implements OnInit {

  cursos:string[]=['java','Angular 2','C#']; 

  constructor() { }

  ngOnInit() {

    
    for (var index = 0; index < this.cursos.length; index++) {
      let curso= this.cursos[index];
    }


  }

}
