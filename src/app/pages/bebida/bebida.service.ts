import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  constructor() { }

  getTitulo(){
    return "novo teste";
  }
}
