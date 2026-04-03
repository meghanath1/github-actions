import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../service/productsService';
import { UpperCasePipe } from '../pipes/upperCase.pipe';
import { HighlightDirective } from '../app/directives/Highlight.directive';
interface ProductInterface  {
    "id": string,
    "name": string,
    "price": number,
    "stock": number,
    rating:number,
    imageUrl:string,
    createdAt:Date
  }[]
@Component({
  selector: 'app-products',
  imports: [CommonModule,UpperCasePipe,HighlightDirective],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit{
  private productsService = inject(ProductService);
  products = signal<ProductInterface[]>([]);
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res)=>{
      this.products.set(res);
    })
  }

}
