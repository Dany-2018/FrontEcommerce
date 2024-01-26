import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Card } from 'src/app/modells/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

    cards = new  Array<Card>()
    formCard: FormGroup
    nextId: number = 1;
    display: boolean

    constructor(private fb: FormBuilder, private CService: CardService){
      this.GetCards()
      this.display = false
      this.cards = new Array<Card>()
      this.formCard = fb.group({
      id_card: new FormControl('',[ Validators.required]),
      name: new FormControl('',[ Validators.required]),
      lastName: new FormControl('',[ Validators.required]),
      cc: new FormControl('',[ Validators.required]),
      phone: new FormControl('',[ Validators.required]),
      email: new FormControl('',[ Validators.required]),
      address: new FormControl('',[ Validators.required]),
      birthDate: new FormControl('',[ Validators.required]),
      insertDate: new FormControl('',[ Validators.required]),
      modificationDate: new FormControl('',[ Validators.required]),
      enableUser: new FormControl('',[ Validators.required]),  
      number: new FormControl('', [ Validators.required]),
      type: new FormControl('', [ Validators.required]),
      cvv: new FormControl('', [ Validators.required]),
      status: new FormControl('', [ Validators.required]),
      monthExpiry: new FormControl('', [ Validators.required]),
      yearExpiry: new FormControl('', [ Validators.required]),

    })
    }

    formatoFecha(fecha: Date): string {
    const year: number = fecha.getFullYear();
    const month: number = fecha.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
    const day: number = fecha.getDate();

    // Asegurarse de que los números tengan dos dígitos (agregar un '0' al principio si es necesario)
    const monthString: string = month < 10 ? `0${month}` : `${month}`;
    const dayString: string = day < 10 ? `0${day}` : `${day}`;

    // Formatear la fecha como "YYYY-MM-DD"
    const fechaFormateada: string = `${year}-${monthString}-${dayString}`;
    return fechaFormateada;
  }


    //crear Card
    createCard(){
      if (this.formCard.invalid){
        alert('por favor complete los campos obligatorios')
      }
      console.log("createCard is called");
        let card = new Card()
        card.id_card =  this.nextId;
        this.nextId++;
        card.name = this.formCard.get('name')?.value
        card.lastName = this.formCard.get('lastName')?.value
        card.cc = this.formCard.get('cc')?.value
        card.phone = this.formCard.get('phone')?.value
        card.email = this.formCard.get('email')?.value
        card.address = this.formCard.get('address')?.value
        card.birthDate = this.formatoFecha(this.formCard.get('birthDate')?.value);
        card.insertDate = this.formatoFecha(this.formCard.get('insertDate')?.value);
        card.modificationDate = this.formatoFecha(this.formCard.get('modificationDate')?.value);
        card.enableUser = this.formCard.get('enableUser')?.value
        card.number = this.formCard.get('number')?.value
        card.type = this.formCard.get('type')?.value
        card.cvv = this.formCard.get('cvv')?.value
        card.status = this.formCard.get('1')?.value
        card.monthExpiry = this.formCard.get('monthExpiry')?.value
        card.yearExpiry = this.formCard.get('yearExpiry')?.value
 
        this.CService.createCard(card).subscribe(res => {
          this.GetCards()
        //  this.formCard.reset()
        })   
    }

    //get cards
    GetCards(){
      this.CService.getCard().subscribe(res=>{
        this.cards = res
      })
    }

    //delet card 
    deleteCard(id_card: number){
     return this.CService.deleteCard(id_card).subscribe(res=>{
        this.GetCards()
      })
    }

    //activa dialog
    showDialog(card: Card){
      this.formCard.get('name')?.setValue(card.name)
      this.formCard.get('lastName')?.setValue(card.lastName)
      this.formCard.get('cc')?.setValue(card.cc)
      this.formCard.get('phone')?.setValue(card.phone)
      this.formCard.get('email')?.setValue(card.email)
      this.formCard.get('address')?.setValue(card.address)
      this.formCard.get('enableUser')?.setValue(card.enableUser)
      this.formCard.get('birthDate')?.setValue(card.birthDate)
      this.formCard.get('insertDate')?.setValue(card.insertDate)
      this.formCard.get('modificationDate')?.setValue(card.modificationDate)
   
      this.display =! this.display
    }

    editCard(){
      let card = new Card()
        card.id_card =  this.nextId;
        this.nextId++;
        card.name = this.formCard.get('name')?.value
        card.lastName = this.formCard.get('lastName')?.value
        card.cc = this.formCard.get('cc')?.value
        card.phone = this.formCard.get('phone')?.value
        card.email = this.formCard.get('email')?.value
        card.address = this.formCard.get('address')?.value
        card.birthDate = this.formatoFecha(this.formCard.get('birthDate')?.value);
        card.insertDate = this.formatoFecha(this.formCard.get('insertDate')?.value);
        card.modificationDate = this.formatoFecha(this.formCard.get('modificationDate')?.value);
        card.enableUser = this.formCard.get('enableUser')?.value
        card.number = this.formCard.get('number')?.value
        card.type = this.formCard.get('type')?.value
        card.cvv = this.formCard.get('cvv')?.value
        card.status = this.formCard.get('1')?.value
        card.monthExpiry = this.formCard.get('monthExpiry')?.value
        card.yearExpiry = this.formCard.get('yearExpiry')?.value
        this.CService.updateCard(card).subscribe(res => {
          this.GetCards()
          this.formCard.reset()
        })
    }

    
}
