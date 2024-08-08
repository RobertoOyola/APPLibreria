import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ListalibrosComponent } from './components/listalibros/listalibros.component';
import { AddestudianteComponent } from './components/addestudiante/addestudiante.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',                  component: LoginComponent},
  { path: 'home',                   component: HomeComponent,
    children: [
          {path: 'libros',          component: ListalibrosComponent},
          {path: 'estudiante',      component: AddestudianteComponent},
          { path: 'admin', loadChildren: () => 
            import('./components/adminscomponents/admin/admin.module').then(m => m.AdminModule) }
        ] 
  },
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
