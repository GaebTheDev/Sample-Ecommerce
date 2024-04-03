import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-checkout-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './checkout-dialog.component.html',
  styleUrl: './checkout-dialog.component.css'
})
export class CheckoutDialogComponent {
  constructor(public dialogRef: MatDialogRef<CheckoutDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: {
    cartProducts: Product[],
    cartProductsQuantity: number[],
    total: number,
    name: string,
    cellphoneNumber: number,
    address: string
  }) { }

  onGoBackPressed(): void {
    this.dialogRef.close();
  }

}
