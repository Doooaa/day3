import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-add-product',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styles: ``,
})
export class AddProductComponent {
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productImage: string = '';
  productRating: string = '';
  productCategory: string = '';
  @Output() myevent = new EventEmitter();

  addProduct() {
    let productObjectData = {
      productName: this.productName,
      productPrice: this.productPrice,
      productDescription: this.productDescription,
      productImage: this.productImage,
      productRating: this.productRating,
      productCategory: this.productCategory,
    };
    this.myevent.emit(productObjectData);
  }

  clearForm() {
    this.productName = '';
    this.productPrice = 0;
    this.productDescription = '';
    this.productImage = '';
    this.productRating = '';
    this.productCategory = '';
  }
  // FormValidation = new FormGroup({
  //   productNamev: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.pattern('^[a-zA-Z 0-9]*$'),
  //   ]),
  //   productPricev: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(1),
  //     Validators.pattern('^[0-9]*$'),
  //   ]),
  //   productDescriptionv: new FormControl('',[Validators.maxLength(100)]),
  //   productImagev: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('https?://.+'),
  //   ]),
  //   productRatingv: new FormControl('', [
  //     Validators.required,
  //     Validators.min(1),
  //     Validators.max(5),
  //   ]),
  //   productCategoryv: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.pattern('^[a-zA-Z 0-9]*$'),
  //   ])

  // });
  // get productname(){
  //   console.log(this.FormValidation.get('productNamev'))
  //   return this.FormValidation.get('productNamev')?.valid;


  // }
}
