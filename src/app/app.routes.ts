import { Routes } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { HomeComponent } from './home/home/home.component';
import { CartaComponent } from './carta/carta/carta.component';

export const routes: Routes = [
    {
        path:"",
        component:TelaLoginComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"carta/:id",
        component:CartaComponent
    }
];
