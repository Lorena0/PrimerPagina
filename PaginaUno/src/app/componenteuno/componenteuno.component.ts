import { Component, OnInit } from '@angular/core';
import { LiteralPrimitive } from '@angular/compiler';

@Component({
  selector: 'app-componenteuno',
  templateUrl: './componenteuno.component.html',
  styleUrls: ['./componenteuno.component.css']
})
export class ComponenteunoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //number = numero entero (0, 1, 2, 3, ...)
  //          se declara sin comillas
  //          SI soporta decimales

  //string = letras y numeros
  //          numeros se tratan como letras (1+1 = 11)
  //          siempre va "entre comillas"

  //boolean = Si = true
  //boolean = No = false


  OnClick(){
    //Creo un casillero en la memoria para guardar solo numeros y le dio de nombre pubg
    //var = crea casillero/baul/caja/banco
    //pubg = es solo el nombre para saber como buscarlo
    //number = le indico que solo guardare numeros (1 + 1 = 2)
     
    var temperatura: number;
    var personaVive: boolean;

    temperatura = this.sensorTemperatura();
    personaVive = this.sensorVida();

    if( temperatura>37.7 && personaVive){
      console.log("No puede ingresar");
    }
    else{
      console.log("Si puede ingresar");
    }
    
  }

  sensorTemperatura(){
    return 37.9;
  }

  sensorVida(){
    return false;
  }

  revision(){
    var temperatura: number;
    var personaVive: boolean;

    temperatura = this.sensorTemperatura();
    personaVive = this.sensorVida();

    if (personaVive == true){
      if (temperatura<37.8){
        console.log("si puede pasar su temperatura es " + temperatura);
      }
      else{
        console.log("no puede pasar su temperatura es " + temperatura);
      }
    }
    else{
      console.log("F");
    }
  }

  cicloWhile(){
    //mientras

    var contador: number;
    contador = 1;

    while (contador<101){
      console.log(contador);
      contador++;
    }

  }

  contadorFor(){

    for(var contador = 100; contador >=1; contador--){

      if(contador != 14){
        console.log(contador);
      }
      else{
        console.log(contador + " Está es la edad de la Lorena xD");
      }
    }
  }
  

}
