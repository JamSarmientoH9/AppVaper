import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market",
  templateUrl: "./market.page.html",
  styleUrls: ["./market.page.scss"],
})
export class MarketPage implements OnInit {
  constructor() {}

  yProduct(productName: string, productPrice: number) {
    console.log(
      `se compro el producto: ${productName}, al precio de: ${productPrice}`
    );
  }

  ngOnInit() {}
}
