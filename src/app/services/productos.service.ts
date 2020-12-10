import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto  } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando = true;//bandera que indique cuando estan cargando los productos
  productos: Producto[] = []; //arreglo de productos


  constructor(private http: HttpClient ) {
this.cargarProductos();
   }

//metodo para cargar producto
private cargarProductos(){
  this.http.get('https://angular-html-7cf20-default-rtdb.firebaseio.com/productos_idx.json')//definicion de la peticion
  .subscribe( (resp: Producto[]) => {

    console.log(resp);
    this.productos = resp;
    this.cargando = false;

  });
}
}
