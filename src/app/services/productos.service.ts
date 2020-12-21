import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Producto } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;//bandera que indique cuando estan cargando los productos
  productos: Producto[] = []; //arreglo de productos
  productosFiltrado: Producto[] = [];




  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  //metodo para cargar producto
  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-7cf20-default-rtdb.firebaseio.com/productos_idx.json')//definicion de la peticion
        .subscribe((resp: Producto[]) => {

          console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();

        });

    });

  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-7cf20-default-rtdb.firebaseio.com/productos/${id}.json`)//se regresa este observable
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });

    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }


  }
  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

}
