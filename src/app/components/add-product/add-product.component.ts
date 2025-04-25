import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators ,FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-add-product',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
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
    this.clearForm() ;
  }

  clearForm() {
    this.productName = '';
    this.productPrice = 0;
    this.productDescription = '';
    this.productImage = '';
    this.productRating = '';
    this.productCategory = '';
  }
  nameFocused = false;
  nameTouched = false;
  priceFocused = false;
  priceTouched = false;
  descFocused = false;
  descTouched = false;
  imageFocused = false;
  imageTouched = false;
  categoryFocused = false;
  categoryTouched = false;
  ratingFocused = false;
  ratingTouched = false;

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
  //   productDescriptionv: new FormControl('', [Validators.maxLength(100)]),
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
  //   ]),
  // });
  // get productname() {
  //   console.log(this.FormValidation.get('productNamev'));
  //   return this.FormValidation.get('productNamev')?.valid;
  // }
  // get productprice() {
  //   return this.FormValidation.get('productPricev')?.valid;
  // }
  // get productdescription() {
  //   return this.FormValidation.get('productDescriptionv')?.valid;
  // }
  // get productimage() {
  //   return this.FormValidation.get('productImagev')?.valid;
  // }
  // get productrating() {
  //   return this.FormValidation.get('productRatingv')?.valid;
  // }
  // get productcategory() {
  //   return this.FormValidation.get('productCategoryv')?.valid;
  // }
  // get productnamevalue() {
  //   return this.FormValidation.get('productNamev')?.value;
  // }
  // get productpricevalue() {
  //   return this.FormValidation.get('productPricev')?.value;
  // }
  // get productdescriptionvalue() {
  //   return this.FormValidation.get('productDescriptionv')?.value;
  // }
  // get productimagevalue() {
  //   return this.FormValidation.get('productImagev')?.value;
  // }
  // get productratingvalue() {
  //   return this.FormValidation.get('productRatingv')?.value;
  // }
  // get productcategoryvalue() {
  //   return this.FormValidation.get('productCategoryv')?.value;
  // }


}
