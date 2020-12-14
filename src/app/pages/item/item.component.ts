import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {

    //llamar la instruccion
    this.route.params
    .subscribe( parametros =>{//el subcribe estara al pendiente de todos los cambios que se sucedan con los parametros de la url

      console.log(parametros ['id']);
    });

}

}