import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})
export class HomeComponent {
  pesquisa:string=""
  cartas:any=[]
  imagePath = 'assets/banner.png'

  constructor(private http:HttpClient){

  }
  pesquisar () {
    this.http.get<any> ('https://api.scryfall.com/cards/search?q='+this.pesquisa).subscribe ((response)=>{
      console.log (response.data)
      this.cartas=response.data
    })
    
  }
  onKey (event:any) {
    this.pesquisa=event.target.value 

  }
}
