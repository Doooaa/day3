import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

@Component({
  //decorator
  standalone: true,
  selector: 'app-root',
  imports: [ FormsModule, CommonModule,AddProductComponent ,ShowProductComponent],
  //selector: 'app-root', //name of the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day3';
  objectDataFromCtP:any={}
  dataObj(data:any){
    this.objectDataFromCtP=data;
    console.log('data from child to parent',this.objectDataFromCtP)
  }
 
}
