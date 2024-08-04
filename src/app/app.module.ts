import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { ListalibrosComponent } from './components/listalibros/listalibros.component';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ListalibrosComponent,
    FormsModule,
    CommonModule,
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
  ]
})

export class AppModule {}