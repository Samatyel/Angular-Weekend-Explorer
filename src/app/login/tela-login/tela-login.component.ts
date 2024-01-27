import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  email: string=""
  senha: string=""
  erro: boolean=false

  ngOnInit (): void {
    const credenciais=localStorage.getItem ('credenciais')
    if(credenciais){
      const credenciaisObj=JSON.parse (credenciais)
      this.email=credenciaisObj.email
      this.senha=credenciaisObj.senha
    }
  }
  entrar () {
    console.log (this.email,this.senha) 
    if (this.email==='' || this.senha===''){
      this.erro=true
      return
    }
    if (this.email==='joao@email.com'&& this.senha==='1234'){
      localStorage.setItem ("credenciais", JSON.stringify ({
        email:this.email,
        senha:this.senha
      }))
      window.location.href ='/home'
    } else {
      this.erro=true
    }

  }

  onKey (event: any) {
    console.log (event.target.value) 
    if (event.target.name==='email') {
      this.email= event.target.value
    } else {
      this.senha=event.target.value
    }
    
  }


}
