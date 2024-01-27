import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  carta:any=""
  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit (){
    this.route.params.subscribe (params =>{
      console.log (params)
      const id = params ["id"]
      this.http.get<any> ('https://api.scryfall.com/cards/'+id).subscribe ((response)=>{
        console.log (response)
        this.carta=response
      })
    })
  }

}
