import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogModule } from './blog/BlogModule';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
   
  
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
