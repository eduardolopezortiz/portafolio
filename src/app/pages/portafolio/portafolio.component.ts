import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {


  //se manda llmar el servicio de producto
  constructor(public productosService: ProductosService  ) { }

  ngOnInit(): void {
  }

}
