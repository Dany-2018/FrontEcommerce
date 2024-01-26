import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../modells/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  rutaGlobal = 'http://localhost:8081/card/'

  constructor(private http: HttpClient) { }

  //crear card

  createCard(card: Card){
    return this.http.post<Card>(this.rutaGlobal + 'new',card, {
      observe: 'response'
    })
  }

  //Obtener card 

  getCard(){
    return this.http.get<Card[]>(this.rutaGlobal + 'show')
  }

  //Actualizar card
  updateCard(card: Card){
    return this.http.post<Card[]>(this.rutaGlobal + 'update', card, {
      observe: 'response'
    })
  }

  //Eliminar card
  deleteCard(id_card: number){
    return this.http.post<Boolean>(this.rutaGlobal + id_card, {
      observe: 'response'
    } )

  }


}
