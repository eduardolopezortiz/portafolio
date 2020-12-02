import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
//funcion para año dinamico footer.component.ts
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
