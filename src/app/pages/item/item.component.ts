import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface'


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService ) { }//se manda llamar un servicio

  ngOnInit(): void {
    this.route.params
    .subscribe( parametros =>{//el subcribe estara al pendiente de todos los cambios que se sucedan con los parametros de la url

      //console.log(parametros);
      this.productoService.getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
         this.id = parametros['id'];
          this.producto =producto;
          console.log(producto);

        });  
              

    });

  }

}
