import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

    // const promesa = new Promise( ( resolve, reject ) => {

    //   if ( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa.then( ( mensaje ) => {
    //   console.log( mensaje );
    // })
    // .catch( error => console.log('Error en mi promesa', error ) );
    // console.log('Fin delInit');

  }

  // tslint:disable-next-line: typedef
  getUsuarios() {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => console.log( body.data ) );
    });

  }

}
